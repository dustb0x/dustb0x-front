// Config
import React from 'react'
import { APP_NAME } from '@/config/constants/app'
import { PAGES } from '@/config/constants/pages'
import { useRouter } from 'next/router'

// WalletConnect
import WalletConnectQRCodeModal from '@walletconnect/qrcode-modal'

// Next UI
import { Button, Navbar, Text } from '@nextui-org/react'

// Components
import ConnectingWalletButton from '@/components/Button/ConnectingWalletButton'
import ConnectWalletButton from '@/components/Button/ConnectWalletButton'
import LinkButton from '@/components/Button/LinkButton'

interface TopNavbarProps {
  isConnected: boolean
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>
}

const TopNavbar: React.FC<TopNavbarProps> = ({
  isConnected,
  setIsConnected
}) => {
  const router = useRouter()

  const [path, setPath] = React.useState<string>('')

  const openWalletConnect = () => {
    console.log('openWalletConnect')
    WalletConnectQRCodeModal.open(
      'https://nodejs.org/en/',
      () => {
        console.log("QR Code Modal closed");
      }
    )
  }

  React.useEffect(() => {
    setPath(router.asPath)
  }, [router])

  return (
    <>
      <Navbar variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            {APP_NAME}
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          {path !== PAGES.app.index ? (
            <Navbar.Item>
              <LinkButton title="Launch App" href={PAGES.app.index} />
            </Navbar.Item>
          ): (
            isConnected ? (
              <Navbar.Item>
                <ConnectingWalletButton onClick={() => setIsConnected(false)} />
              </Navbar.Item>
            ) : (
              <Navbar.Item>
                <Button onClick={() => openWalletConnect()}>test</Button>
              </Navbar.Item>
            )
          )}
        </Navbar.Content>
      </Navbar>
    </>
  )
}

export default TopNavbar
