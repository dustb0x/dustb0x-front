// Comoponents
import BaseButton from "./BaseButton"

interface ConnectWalletButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  onClick
}) => {
  return (
    <BaseButton
      title="Connect"
      auto
      flat
      onClick={onClick}
    />
  )
}

export default ConnectWalletButton
