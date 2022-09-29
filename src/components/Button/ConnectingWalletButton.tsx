// Comoponents
import BaseButton from "./BaseButton"

interface ConnectingWalletButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ConnectingWalletButton: React.FC<ConnectingWalletButtonProps> = ({
  onClick
}) => {
  return (
    <BaseButton
      title="Connectiong Wallet"
      auto
      flat
      onClick={onClick}
    />
  )
}

export default ConnectingWalletButton
