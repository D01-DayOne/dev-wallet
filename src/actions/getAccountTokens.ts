import { type Address, parseAbiItem } from 'abitype'
import type { GetLogsParameters } from 'viem'
import { erc20Abi } from 'viem'

import { getLogsQueryOptions } from '~/hooks/useGetLogs'
import { queryClient } from '~/react-query'
import type { Client } from '~/viem'

export async function getAccountTokens(
  client: Client,
  {
    address,
    fromBlock,
    toBlock,
  }: {
    address: Address
    fromBlock: GetLogsParameters['fromBlock']
    toBlock: GetLogsParameters['toBlock']
  },
) {
  console.log('getAccountTokens params:', { address, fromBlock, toBlock })

  const [transfersFrom, transfersTo] = await Promise.all([
    queryClient.fetchQuery(
      getLogsQueryOptions(client, {
        event: parseAbiItem(
          'event Transfer(address indexed from, address indexed to, uint256)',
        ),
        args: {
          from: address,
        },
        fromBlock,
        toBlock,
      }),
    ),
    queryClient.fetchQuery(
      getLogsQueryOptions(client, {
        event: parseAbiItem(
          'event Transfer(address indexed from, address indexed to, uint256)',
        ),
        args: {
          to: address,
        },
        fromBlock,
        toBlock,
      }),
    ),
  ])
    // console.log(transfersFrom, transfersTo, 'transfers');
  const potentialTokens = [
    ...new Set([
      ...(transfersFrom?.map((t) => t.address) || []),
      ...(transfersTo?.map((t) => t.address) || []),
    ]),
  ]

  const erc20Tokens = await Promise.all(
    potentialTokens.map(async (tokenAddress) => {
      try {
        const decimals = await client.readContract({
          address: tokenAddress,
          abi: erc20Abi,
          functionName: 'decimals',
        })
        return typeof decimals === 'number' && decimals >= 0 && decimals <= 255
          ? tokenAddress
          : null
      } catch {
        return null
      }
    }),
  )

  return erc20Tokens.filter((token): token is Address => token !== null)
}
