
//Config
import { MAIN_COLOR } from '@/config/constants/colors'

// Next UI
import { Container, Loading, Row, Text } from '@nextui-org/react'

interface HeaderSectionProps {
  isAuthenticated: boolean
  isLoading: boolean
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  isAuthenticated,
  isLoading
}) => {
  const SubTitleText = () => {
    return (
      <Row justify="center" align="center">
        <Text
          css={{ 
            '@xsMax': {
              fontSize: 20
            },
          }}
          size={30}
        >
          Please make a wallet connect.
        </Text>
      </Row>
    )
  }

  return (
    <Container>
      <Row justify="center" align="center">
        <Text
          css={{ 
            pt: 50,
            '@xsMax': {
              fontSize: 35
            },
          }}
          size={60}
          weight="bold"
        >
          Organize your wallet
        </Text>
      </Row>
      {!isAuthenticated && <SubTitleText />}
      {isLoading &&
        <Row justify="center" align="center">
          <Loading
            css={{ 
              py: 20
            }}
            type="gradient"
            size="lg"
            color={MAIN_COLOR}
            textColor={MAIN_COLOR}
          >
            Connecting wallet...
          </Loading>
        </Row>
      }
    </Container>
  )
}

export default HeaderSection
