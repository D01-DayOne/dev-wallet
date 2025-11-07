import * as Tabs from '@radix-ui/react-tabs'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import {
  type Address,
  type BaseError,
  formatUnits,
  isAddress,
  parseUnits,
} from 'viem'

import { TabsContent, TabsList, Tooltip } from '~/components'
import * as Form from '~/components/form'
import { Spinner } from '~/components/svgs'
import { truncate } from '~/utils'

function formatBalance(balance: bigint, decimals: number, maxDecimals = 5): string {
  const formatted = formatUnits(balance, decimals)
  const [whole, decimal] = formatted.split('.')
  if (!decimal) return whole
  const truncated = decimal.slice(0, maxDecimals)
  // Remove trailing zeros
  const trimmed = truncated.replace(/0+$/, '')
  return trimmed ? `${whole}.${trimmed}` : whole
}
import {
  Bleed,
  Box,
  Button,
  Column,
  Columns,
  Inline,
  Input,
  Inset,
  Separator,
  Stack,
  Text,
} from '~/design-system'
import { useAccountTokens } from '~/hooks/useAccountTokens'
import { useBalance } from '~/hooks/useBalance'
import { useErc20Balance } from '~/hooks/useErc20Balance'
import { useErc20Metadata } from '~/hooks/useErc20Metadata'
import { useSetErc20Balance } from '~/hooks/useSetErc20Balance'

export default function AccountDetails() {
  const { address } = useParams()
  const [params, setParams] = useSearchParams({ tab: 'tokens' })
  const navigate = useNavigate()

  if (!address) return null
  return (
    <>
      <Box paddingHorizontal="4px" paddingVertical="12px">
        <Inline gap="4px" alignVertical="center" wrap={false}>
          <Box
            style={{
              width: '24px',
              height: '24px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              type="button"
              onClick={() => navigate(-1)}
              variant="ghost primary"
            >
              ←
            </Button>
          </Box>
          <Stack gap="2px" width="full">
            <Text color="text/tertiary" size="9px">
              Account
            </Text>
            <Text family="address" size="11px">
              {truncate(address, { start: 5, end: 5 })}
            </Text>
          </Stack>
        </Inline>
      </Box>
      <Separator />
      <Inset horizontal="8px">
        <Stack gap="8px">
          <Tabs.Root asChild value={params.get('tab')!}>
            <Box display="flex" flexDirection="column" height="full">
              <TabsList
                items={[
                  { label: 'Tokens', value: 'tokens' },
                  // { label: 'NFTs', value: 'nfts' },
                ]}
                onSelect={(item) => {
                  setParams({ tab: item.value })
                }}
              />
              <TabsContent inset={false} value="tokens">
                <Tokens accountAddress={address as Address} />
              </TabsContent>
              {/* <TabsContent inset={false} value="nfts">
              <NFTs />
            </TabsContent> */}
            </Box>
          </Tabs.Root>
        </Stack>
      </Inset>
    </>
  )
}

function Tokens({ accountAddress }: { accountAddress: Address }) {
  const { tokens } = useAccountTokens({ address: accountAddress })

  if (!accountAddress) return null
  return (
    <Inset vertical="8px">
      <ImportToken accountAddress={accountAddress} />
      <Box style={{ height: '4px' }} />
      <Box style={{ height: '24px' }}>
        <Columns alignHorizontal="justify" gap="4px">
          <Column alignVertical="center" width="content">
            <Text color="text/tertiary" size="9px" wrap={false}>
              TOKEN
            </Text>
          </Column>
          <Column alignVertical="center" width="content">
            <Text align="right" color="text/tertiary" size="9px" wrap={false}>
              BALANCE
            </Text>
          </Column>
          <Column alignVertical="center" width="content">
            <Text align="right" color="text/tertiary" size="9px" wrap={false}>
              ACTIONS
            </Text>
          </Column>
        </Columns>
      </Box>
      <Bleed horizontal="-8px">
        <Separator />
      </Bleed>
      {/* Native ETH */}
      <NativeTokenRow accountAddress={accountAddress} />
      {/* TODO: Handle empty state. */}
      {tokens?.map((token) =>
        token.visible ? (
          <TokenRow
            accountAddress={accountAddress}
            tokenAddress={token.address}
            key={token.address}
          />
        ) : null,
      )}
    </Inset>
  )
}

function ImportToken({ accountAddress }: { accountAddress: Address }) {
  const { addToken } = useAccountTokens({ address: accountAddress })

  const { handleSubmit, register, reset } = useForm<{ address: string }>({
    defaultValues: {
      address: '',
    },
  })

  const submit = handleSubmit(async ({ address }) => {
    try {
      if (!accountAddress || !address || !isAddress(address)) {
        toast.error('Invalid token address')
        reset()
        return
      }

      addToken({ tokenAddress: address })
    } finally {
      reset()
    }
  })

  return (
    <Form.Root onSubmit={submit} style={{ width: '100%' }}>
      <Inline gap="4px" wrap={false}>
        <Form.InputField
          height="24px"
          hideLabel
          label="Import token address"
          placeholder="Import token address"
          register={register('address')}
        />
        <Button height="24px" variant="stroked fill" width="fit" type="submit">
          Import
        </Button>
      </Inline>
    </Form.Root>
  )
}

function NativeTokenRow({ accountAddress }: { accountAddress: Address }) {
  const navigate = useNavigate()
  const { data: balance } = useBalance({ address: accountAddress })

  const decimals = 18
  const symbol = 'ETH'
  const name = 'Ethereum'

  return (
    <>
      <Inset vertical="12px">
        <Box position="relative">
          <Columns alignVertical="center" alignHorizontal="justify" gap="8px">
            <Column width="content">
              <Stack gap="4px">
                <Inline gap="8px" alignVertical="center">
                  <Tooltip label={name}>
                    <Box
                      borderWidth="1px"
                      borderColor="surface/invert@0.2"
                      padding="2px"
                    >
                      <Text family="numeric" color="text/tertiary" size="9px">
                        {symbol}
                      </Text>
                    </Box>
                  </Tooltip>
                  <Text size="12px">{name}</Text>
                </Inline>
                <Text color="text/tertiary" size="11px">
                  Native Token
                </Text>
              </Stack>
            </Column>
            <Column width="content">
              {typeof balance === 'bigint' && (
                <Text
                  align="right"
                  family="numeric"
                  size="12px"
                >
                  {formatBalance(balance, decimals)}
                </Text>
              )}
            </Column>
            <Column width="content">
              <Button.Symbol
                label="Send"
                symbol="paperplane"
                height="36px"
                variant="ghost blue"
                onClick={(e) => {
                  e.stopPropagation()
                  navigate(`/transfer/${accountAddress}`)
                }}
              />
            </Column>
          </Columns>
        </Box>
      </Inset>
      <Box marginHorizontal="-8px">
        <Separator />
      </Box>
    </>
  )
}

function TokenRow({
  accountAddress,
  tokenAddress,
}: { accountAddress: Address; tokenAddress: Address }) {
  const navigate = useNavigate()
  const { hideToken, removeToken } = useAccountTokens({
    address: accountAddress,
  })

  const { data: balance, error: balanceError } = useErc20Balance({
    address: accountAddress,
    tokenAddress,
  })

  const { data, error: metadataError } = useErc20Metadata({
    tokenAddress,
  })

  useEffect(() => {
    if (balanceError) {
      toast.error((balanceError as BaseError).shortMessage)
      removeToken({ tokenAddress })
    }
  }, [balanceError, tokenAddress, removeToken])

  useEffect(() => {
    if (metadataError) {
      toast.error((metadataError as BaseError).shortMessage)
      removeToken({ tokenAddress })
    }
  }, [metadataError, tokenAddress, removeToken])

  const isLoading = !data
  const { name, symbol, decimals } = data || {}

  return (
    <>
      <Inset vertical="12px">
        <Box position="relative">
          <Columns alignVertical="center" alignHorizontal="justify" gap="8px">
            <Column width="content">
              <Stack gap="4px">
                {isLoading ? (
                  <Inline alignVertical="center" gap="4px">
                    <Spinner size="11px" />
                    <Text color="text/tertiary" size="12px">
                      Importing...
                    </Text>
                  </Inline>
                ) : (
                  <>
                    <Inline gap="8px" alignVertical="center">
                      <Tooltip label={name || 'Token'}>
                        <Box
                          borderWidth="1px"
                          borderColor="surface/invert@0.2"
                          padding="2px"
                        >
                          <Text family="numeric" color="text/tertiary" size="9px">
                            {symbol || '???'}
                          </Text>
                        </Box>
                      </Tooltip>
                      <Text size="12px">{name}</Text>
                    </Inline>
                    <Tooltip label={tokenAddress}>
                      <Text.Truncated
                        family="address"
                        color="text/tertiary"
                        size="11px"
                      >
                        {tokenAddress}
                      </Text.Truncated>
                    </Tooltip>
                  </>
                )}
              </Stack>
            </Column>
            <Column width="content">
              {typeof balance === 'bigint' && typeof decimals === 'number' && (
                <BalanceInput
                  address={accountAddress}
                  balance={balance}
                  decimals={decimals}
                  tokenAddress={tokenAddress}
                />
              )}
            </Column>
            <Column width="content">
              <Inline gap="4px">
                <Button.Symbol
                  label="Send"
                  symbol="paperplane"
                  height="36px"
                  variant="ghost blue"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/transfer/${accountAddress}/${tokenAddress}`)
                  }}
                />
                <Button.Symbol
                  label="Delete"
                  symbol="trash"
                  height="36px"
                  variant="ghost red"
                  onClick={(e) => {
                    e.stopPropagation()
                    hideToken({ tokenAddress })
                  }}
                />
              </Inline>
            </Column>
          </Columns>
        </Box>
      </Inset>
      <Box marginHorizontal="-8px">
        <Separator />
      </Box>
    </>
  )
}

function BalanceInput({
  address,
  balance,
  decimals,
  tokenAddress,
}: {
  address: Address
  balance: bigint
  decimals: number
  tokenAddress: Address
}) {
  const { mutate, isPending } = useSetErc20Balance()

  const [value, setValue] = useState(formatBalance(balance, decimals))

  useEffect(() => {
    setValue(formatBalance(balance, decimals))
  }, [balance, decimals])

  return (
    <Box>
      <Columns alignVertical="center" alignHorizontal="right" gap="8px">
        {isPending && (
          <Column alignHorizontal="right" width="1/5">
            <Spinner size="15px" />
          </Column>
        )}
        <Column alignHorizontal="right" width="4/5">
          <Input
            onChange={(e) => setValue(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            onBlur={(e) => {
              const newValue = parseUnits(
                e.target.value as `${number}`,
                decimals,
              )
              if (newValue !== balance) {
                mutate({
                  address,
                  tokenAddress,
                  value: newValue,
                })
              }
            }}
            height="24px"
            style={{ maxWidth: '180px', textAlign: 'right' }}
            value={value}
          />
        </Column>
      </Columns>
    </Box>
  )
}
