// Next UI
import { Link } from '@nextui-org/react'

// Conponents
import BaseButton from '@/components/Button/BaseButton'

interface LinkButtonProps {
  title: string
  href: string
}

const LinkButton: React.FC<LinkButtonProps> = ({
  title,
  href
}) => {
  return (
    <BaseButton
      title={title}
      auto
      flat
      as={Link}
      href={href}
    />
  )
}

export default LinkButton
