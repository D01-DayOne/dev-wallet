import { Container } from '~/components'
import { Box, Inline, Inset, Stack, Text, Button } from '~/design-system'
import { getTheme, setTheme } from '~/design-system/utils/theme'
import { useSettingsStore } from '~/zustand'
import { useState } from 'react'

export default function Settings() {
  const {
    bypassConnectAuth,
    bypassSignatureAuth,
    bypassTransactionAuth,
    setBypassConnectAuth,
    setBypassSignatureAuth,
    setBypassTransactionAuth,
  } = useSettingsStore()

  const [currentTheme, setCurrentTheme] = useState(() => {
    const { storageTheme, systemTheme } = getTheme()
    return storageTheme || systemTheme || 'light'
  })

  const handleToggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    setCurrentTheme(newTheme)
  }

  return (
    <Container dismissable fit header="Settings">
      <Stack gap="16px">
        <Text color="text/tertiary">Appearance</Text>
        <Inset right="4px">
          <Inline
            alignVertical="center"
            alignHorizontal="justify"
            wrap={false}
          >
            <Box width="full">
              <Text size="12px">Theme</Text>
            </Box>
            <Button
              height="24px"
              onClick={handleToggleTheme}
              variant="stroked fill"
              width="fit"
            >
              {currentTheme === 'dark' ? 'Dark' : 'Light'}
            </Button>
          </Inline>
        </Inset>
        <Text color="text/tertiary">Cheats</Text>
        <Inset right="4px">
          <Stack gap="8px">
            <Inline
              alignVertical="center"
              alignHorizontal="justify"
              wrap={false}
            >
              <Box as="label" htmlFor="instant-connect-auth" width="full">
                <Text size="12px">Bypass Connect Authorization</Text>
              </Box>
              {/** TODO: <Checkbox> component */}
              <Box
                as="input"
                id="instant-connect-auth"
                checked={bypassConnectAuth}
                onChange={(e) => {
                  setBypassConnectAuth(e.target.checked)
                }}
                type="checkbox"
              />
            </Inline>
            <Inline
              alignVertical="center"
              alignHorizontal="justify"
              wrap={false}
            >
              <Box as="label" htmlFor="instant-signature-auth" width="full">
                <Text size="12px">Bypass Signature Authorization</Text>
              </Box>
              {/** TODO: <Checkbox> component */}
              <Box
                as="input"
                id="instant-signature-auth"
                checked={bypassSignatureAuth}
                onChange={(e) => {
                  setBypassSignatureAuth(e.target.checked)
                }}
                type="checkbox"
              />
            </Inline>
            <Inline
              alignVertical="center"
              alignHorizontal="justify"
              wrap={false}
            >
              <Box as="label" htmlFor="instant-transaction-auth" width="full">
                <Text size="12px">Bypass Transaction Authorization</Text>
              </Box>
              {/** TODO: <Checkbox> component */}
              <Box
                as="input"
                id="instant-transaction-auth"
                checked={bypassTransactionAuth}
                onChange={(e) => {
                  setBypassTransactionAuth(e.target.checked)
                }}
                type="checkbox"
              />
            </Inline>
          </Stack>
        </Inset>
      </Stack>
    </Container>
  )
}
