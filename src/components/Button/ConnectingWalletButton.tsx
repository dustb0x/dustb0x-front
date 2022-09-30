// Con
import { MAIN_COLOR } from '@/config/constants/colors'

// Next UI
import { Button } from '@nextui-org/react'

interface ConnectingWalletButtonProps {
  logout: () => Promise<void>
}

const ConnectingWalletButton: React.FC<ConnectingWalletButtonProps> = ({
  logout
}) => {
  return (
    <Button
      id="connectiong-wallet-button"
      color={MAIN_COLOR}
      auto
      flat
      onClick={logout}
    >
      Connectiong Wallet
    </Button>
  )
}

export default ConnectingWalletButton
