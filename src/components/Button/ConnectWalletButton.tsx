// Config
import { MAIN_COLOR } from '@/config/constants/colors'
import { SIGNING_MESSAGE } from '@/config/constants/auth'
import Moralis from 'moralis-v1'
import { AuthenticateOptions } from 'react-moralis/lib/hooks/core/useMoralis/_useMoralisAuth'

// Next UI
import { Button } from '@nextui-org/react'

interface ConnectWalletButtonProps {
  authenticate: (options?: AuthenticateOptions | undefined) => Promise<Moralis.User<Moralis.Attributes> | undefined>
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  authenticate
}) => {
  return (
    <Button
      id="connect-wallet-button"
      color={MAIN_COLOR}
      auto
      flat
      onClick={
        () => authenticate({
          signingMessage: SIGNING_MESSAGE
        })
      }
    >
      Connect
    </Button>
  )
}

export default ConnectWalletButton
