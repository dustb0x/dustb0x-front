// Config
import { MAIN_COLOR } from '@/config/constants/colors'
import { useRouter } from 'next/router'

// Next UI
import { Button } from '@nextui-org/react'

interface LinkButtonProps {
  title: string
  href: string
}

const LinkButton: React.FC<LinkButtonProps> = ({
  title,
  href
}) => {
  const router = useRouter()

  return (
    <Button
      id="link-button"
      color={MAIN_COLOR}
      auto
      flat
      onClick={() => router.push(href)}
    >
      {title}
    </Button>
  )
}

export default LinkButton
