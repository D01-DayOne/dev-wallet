import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import {
  type Address,
  type BaseError,
  type Hex,
  formatUnits,
  isAddress,
  parseUnits,
} from 'viem'

import { Container } from '~/components'
import * as Form from '~/components/form'
import { Spinner } from '~/components/svgs'
import { erc20Abi } from '~/constants/abi'
import {
  Box,
  Button,
  Column,
  Columns,
  Inline,
  Separator,
  Stack,
  Text,
} from '~/design-system'
import { useBalance } from '~/hooks/useBalance'
import { useClient } from '~/hooks/useClient'
import { useErc20Balance } from '~/hooks/useErc20Balance'
import { useErc20Metadata } from '~/hooks/useErc20Metadata'
import { useWriteContract } from '~/hooks/useWriteContract'
import { queryClient } from '~/react-query'

type TransferFormData = {
  recipient: string
  amount: string
}

export default function TokenTransfer() {
  const { accountAddress, tokenAddress } = useParams<{
    accountAddress: Address
    tokenAddress?: Address
  }>()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isNativeTransfer = !tokenAddress

  // Fetch token metadata if ERC20
  const { data: tokenMetadata } = useErc20Metadata({
    tokenAddress: tokenAddress!,
  })

  // Fetch balances
  const { data: nativeBalance } = useBalance({ address: accountAddress })
  const { data: tokenBalance } = useErc20Balance({
    address: accountAddress!,
    tokenAddress: tokenAddress!,
  })

  const balance = isNativeTransfer ? nativeBalance : tokenBalance
  const decimals = isNativeTransfer ? 18 : tokenMetadata?.decimals ?? 18
  const symbol = isNativeTransfer ? 'ETH' : tokenMetadata?.symbol ?? ''
  const name = isNativeTransfer ? 'Ethereum' : tokenMetadata?.name ?? ''

  const client = useClient()
  const { mutateAsync: writeContract } = useWriteContract()

  // Form state
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<TransferFormData>({
    mode: 'onChange',
    defaultValues: {
      recipient: '',
      amount: '',
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    if (!accountAddress || !balance) return

    setIsSubmitting(true)
    try {
      const amount = parseUnits(data.amount, decimals)

      let txHash: Hex

      if (isNativeTransfer) {
        // Native ETH transfer
        txHash = await client.sendTransaction({
          account: accountAddress,
          to: data.recipient as Address,
          value: amount,
          chain: null,
        })
      } else {
        // ERC20 token transfer
        txHash = await writeContract({
          address: tokenAddress!,
          abi: erc20Abi,
          functionName: 'transfer',
          args: [data.recipient as Address, amount],
          account: accountAddress,
        })
      }

      // Wait for transaction receipt to confirm success/failure
      const receipt = await client.waitForTransactionReceipt({ hash: txHash })

      if (receipt.status === 'success') {
        toast.success(`Transfer successful! TX: ${txHash.slice(0, 10)}...`)
        // invalidate tokens to fetch new ones
        await queryClient.invalidateQueries({
          predicate: (query) => {
            return query.queryKey[0] === 'account-tokens'
          },
        })

        // invalidate balances to update
        await queryClient.invalidateQueries({
          predicate: (query) =>
            query.queryKey[0] === 'balance' ||
            query.queryKey[0] === 'erc20-balance',
        })

        navigate(-1)
      } else {
        toast.error('Transaction reverted')
      }
    } catch (error) {
      const err = error as BaseError
      console.error('Transfer error:', err)

      // Show detailed error message including cause if available
      const errorMessage =
        err.shortMessage ||
        (err.cause as any)?.reason ||
        (err.cause as any)?.shortMessage ||
        err.message ||
        'Transfer failed'

      toast.error(errorMessage, {
        description: (err.cause as any)?.details || err.details,
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  })

  const handleMaxClick = () => {
    if (balance) {
      setValue('amount', formatUnits(balance, decimals), {
        shouldValidate: true,
      })
    }
  }

  return (
    <Container dismissable header={`Send ${symbol || 'Token'}`}>
      <Stack gap="24px">
        {/* Token Info */}
        <Box>
          <Stack gap="4px">
            <Text size="14px" weight="medium">
              {name}
            </Text>
            <Columns alignVertical="center" gap="8px">
              <Column>
                <Text color="text/tertiary" size="11px">
                  Available Balance
                </Text>
              </Column>
              <Column>
                <Text align="right" family="numeric" size="11px">
                  {balance ? formatUnits(balance, decimals) : '0'} {symbol}
                </Text>
              </Column>
            </Columns>
          </Stack>
        </Box>

        <Separator />

        {/* Transfer Form */}
        <Form.Root onSubmit={onSubmit}>
          <Stack gap="20px">
            {/* Recipient Address Field */}
            <Form.InputField
              label="Recipient Address"
              placeholder="0x..."
              register={register('recipient', {
                required: 'Recipient address is required',
                validate: (value) =>
                  isAddress(value) || 'Invalid Ethereum address',
              })}
              errorMessage={errors.recipient?.message}
              height="36px"
            />

            {/* Amount Field */}
            <Form.InputField
              label={`Amount (${symbol})`}
              placeholder="0.0"
              type="number"
              step="any"
              register={register('amount', {
                required: 'Amount is required',
                validate: (value) => {
                  if (!value || value === '0')
                    return 'Amount must be greater than 0'
                  try {
                    const amount = parseUnits(value, decimals)
                    if (balance && amount > balance) {
                      return 'Insufficient balance'
                    }
                    return true
                  } catch {
                    return 'Invalid amount'
                  }
                },
              })}
              errorMessage={errors.amount?.message}
              height="36px"
              innerRight={
                <Button
                  height="24px"
                  variant="ghost primary"
                  onClick={handleMaxClick}
                  type="button"
                >
                  MAX
                </Button>
              }
            />

            <Separator />

            {/* Action Buttons */}
            <Inline gap="12px" wrap={false}>
              <Button
                onClick={() => navigate(-1)}
                variant="stroked fill"
                disabled={isSubmitting}
                type="button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="solid green"
                disabled={!isValid || isSubmitting || !balance}
              >
                {isSubmitting ? (
                  <Inline gap="8px" alignVertical="center">
                    <Spinner size="14px" />
                    <Text>Sending...</Text>
                  </Inline>
                ) : (
                  'Send'
                )}
              </Button>
            </Inline>
          </Stack>
        </Form.Root>
      </Stack>
    </Container>
  )
}
