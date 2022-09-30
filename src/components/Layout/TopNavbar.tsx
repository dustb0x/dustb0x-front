// Config
import React from 'react'
import Moralis from 'moralis-v1'
import { AuthenticateOptions } from 'react-moralis/lib/hooks/core/useMoralis/_useMoralisAuth'
import { APP_NAME } from '@/config/constants/app'
import { PAGES } from '@/config/constants/pages'
import { useRouter } from 'next/router'

// Next UI
import { Navbar, Text } from '@nextui-org/react'

// Components
import ConnectingWalletButton from '@/components/Button/ConnectingWalletButton'
import ConnectWalletButton from '@/components/Button/ConnectWalletButton'
import ConnectWalletModal from '@/components/Modal/ConnectWalletModal'
import LinkButton from '@/components/Button/LinkButton'

interface TopNavbarProps {
  isAuthenticated: boolean
  authenticate: (options?: AuthenticateOptions | undefined) => Promise<Moralis.User<Moralis.Attributes> | undefined>
  logout: () => Promise<void>
}

const TopNavbar: React.FC<TopNavbarProps> = ({
  isAuthenticated,
  authenticate,
  logout
}) => {
  const router = useRouter()

  const [path, setPath] = React.useState<string>('')
  const [connectWalletModel, setConnectWalletModal] = React.useState<boolean>(false)

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
            <Navbar.Item id="navbar-item-1">
              <LinkButton title="Launch App" href={PAGES.app.index} />
            </Navbar.Item>
          ): (
            isAuthenticated ? (
              <Navbar.Item id="navbar-item-2">
                <ConnectingWalletButton logout={logout} />
              </Navbar.Item>
            ) : (
              <Navbar.Item id="navbar-item-3">
                <ConnectWalletButton authenticate={authenticate} />
              </Navbar.Item>
            )
          )}
        </Navbar.Content>
      </Navbar>
      <ConnectWalletModal
        isOpen={connectWalletModel}
        setIsOpen={setConnectWalletModal}
      />
    </>
  )
}

export default TopNavbar
