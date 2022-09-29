// Config
import { MAIN_COLOR } from '@/config/constants/colors'

// Next UI
import { Button } from '@nextui-org/react'

interface BaseButtonProps {
  title: string
  auto?: boolean | undefined
  flat?: boolean | undefined
  as?: any
  href?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const BaseButton: React.FC<BaseButtonProps> = ({
  title,
  as,
  auto,
  href,
  flat,
  onClick
}) => {
  return (
    <Button
      as={as}
      auto={auto}
      color={MAIN_COLOR}
      href={href}
      flat={flat}
      onClick={onClick}
    >
      {title}
    </Button>
  )
}

export default BaseButton
