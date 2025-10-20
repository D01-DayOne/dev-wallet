import { v4 as uuidv4 } from '@lukeed/uuid'
import { type EIP1193Provider, announceProvider } from 'mipd'

import { getMessenger } from '~/messengers'
import { getProvider } from '~/provider'

const backgroundMessenger = getMessenger('background:inpage')
const walletMessenger = getMessenger('wallet:inpage')

// Generate SVG icon based on BrandIcon design
function generateBrandIcon(): `data:image/${string}` {
  const svg = `<svg viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
    <path d="m14.5 0 12.557 7.25v14.5L14.5 29 1.943 21.75V7.25L14.5 0Z" fill="white"/>
    <circle cx="14.658" cy="14.342" r="6.462" fill="black"/>
    <circle cx="14.658" cy="14.342" r="3.31" fill="white"/>
  </svg>`
  return `data:image/svg+xml,${encodeURIComponent(
    svg,
  )}` as `data:image/${string}`
}

export function injectProvider() {
  const provider = getProvider({
    host: window.location.host,
    eventMessenger: [walletMessenger, backgroundMessenger],
    requestMessenger: backgroundMessenger,
  })

  // Inject provider directly onto window
  window.ethereum = provider
  window.dispatchEvent(new Event('ethereum#initialized'))

  // Re-inject provider on demand
  walletMessenger.reply('injectProvider', async () => {
    window.ethereum = provider
  })

  // Announce provider
  announceProvider({
    info: {
      icon: generateBrandIcon(),
      name: 'DW: DevWallet',
      rdns: 'wallet.devwallet',
      uuid: uuidv4(),
    },
    provider: provider as EIP1193Provider,
  })
}
