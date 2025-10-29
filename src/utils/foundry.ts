import type { Abi, Address, Hex } from 'viem'

export type FoundryDeployedContract = {
  address: Address
  name: string
  abi?: Abi
  bytecode?: Hex
}

type FoundryTransaction = {
  transactionType: string
  contractName?: string
  contractAddress?: string
  transaction?: {
    data?: Hex
  }
}

type FoundryBroadcast = {
  transactions: FoundryTransaction[]
}

/**
 * Parse Foundry broadcast file (broadcast/31337/run-latest.json)
 * and extract deployed contracts
 */
export async function parseFoundryBroadcast(
  file: File,
): Promise<FoundryDeployedContract[]> {
  try {
    const broadcastContent = await file.text()
    const broadcast = JSON.parse(broadcastContent) as FoundryBroadcast
    const contracts: FoundryDeployedContract[] = []

    for (const tx of broadcast.transactions) {
      if (
        (tx.transactionType === 'CREATE' || tx.transactionType === 'CREATE2') &&
        tx.contractName &&
        tx.contractAddress
      ) {
        contracts.push({
          address: tx.contractAddress as Address,
          name: tx.contractName,
          bytecode: tx.transaction?.data,
        })
      }
    }

    return contracts
  } catch (error) {
    console.error('Failed to parse Foundry broadcast file:', error)
    throw error
  }
}

/**
 * Load ABIs from selected files and match to contracts
 */
export async function loadAbisFromFiles(
  contracts: FoundryDeployedContract[],
  files: File[],
): Promise<FoundryDeployedContract[]> {
  const contractsWithAbis = await Promise.all(
    contracts.map(async (contract) => {
      // Find matching ABI file by contract name
      const matchingFile = files.find((file) => {
        const fileName = file.name.replace('.json', '')
        return fileName === contract.name
      })

      if (matchingFile) {
        try {
          const content = await matchingFile.text()
          const json = JSON.parse(content) as { abi: Abi }
          return {
            ...contract,
            abi: json.abi,
          }
        } catch (error) {
          console.error(
            `Failed to parse ABI for ${contract.name}:`,
            error,
          )
        }
      }

      return contract
    }),
  )

  return contractsWithAbis
}