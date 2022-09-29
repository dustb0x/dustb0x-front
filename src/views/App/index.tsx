// Config
import React from 'react'
import styles from '@/styles/Home.module.css'

// Next UI
import { Card, Col, Container, Grid, Row, Text } from '@nextui-org/react'

// Components
import CompletedModal from '@/components/Modal/CompletedModal'
import NftDetailModal from '@/components/Modal/NftDetailModal'
import PageMeta from '@/components/Layout/PageMeta'
import TopNavbar from '@/components/Layout/TopNavbar'

const AppView: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [isCompletedModal, setIsCompletedModal] = React.useState<boolean>(false)

  const [isConnected, setIsConnected] = React.useState<boolean>(false)
  const [nfts, setNfts] = React.useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])

  return (
    <>
      <PageMeta />
      <TopNavbar
        isConnected={isConnected}
        setIsConnected={setIsConnected}
      />
      <div className={styles.container}>
        {!isConnected ? (
          <Container>
            <Row justify="center" align="center">
              <Text
                css={{ 
                  pt: 160,
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
          </Container>
        ) : (
          <>
            <Container>
              <Row justify="center" align="center">
                <Text
                  css={{ 
                    '@xsMax': {
                      py: 20,
                      fontSize: 35
                    },
                    '@xsMin': {
                      py: 50,
                    },
                    '@smMax': {
                      py: 50,
                    },
                    '@smMin': {
                      py: 50,
                    },
                    '@mdMin': {
                      py: 50,
                    }
                  }}
                  size={40}
                  weight="bold"
                >
                  My NFTs
                </Text>
              </Row>
            </Container>
            <Grid.Container
              css={{ 
                '@xsMax': {
                  px: 30
                },
                '@xsMin': {
                  px: 30
                },
                '@smMax': {
                  px: 30
                },
                '@smMin': {
                  px: 30
                },
                '@mdMin': {
                  px: 100
                }
              }}
              justify="center"
            >
              {nfts.map(() => {
                return (
                  <Grid xs={12} sm={2} justify="center">
                    <Card
                      isPressable
                      isHoverable
                      css={{ 
                        m: 10
                      }}
                      onClick={() => setIsOpen(true)}
                    >
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src="./drops-p2dJC3aIeHg7sQh7_png_1428.png"
                          width="100%"
                          height="100%"
                          objectFit="cover"
                          alt="Card example background"
                        />
                      </Card.Body>
                      <Card.Footer
                        isBlurred
                        css={{
                          position: "absolute",
                          bgBlur: "#ffffff66",
                          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                          bottom: 0,
                          zIndex: 1,
                        }}
                      >
                        <Row>
                          <Col>
                            <Text color="#000" size={12}>
                              DROP'S # 3011
                            </Text>
                            <Text color="#000" size={12}>
                              METAKAWAII
                            </Text>
                          </Col>
                        </Row>
                      </Card.Footer>
                    </Card>
                  </Grid>
                )
              })}
            </Grid.Container>
          </>
        )}
        <NftDetailModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isLoading={false}
        />
        <CompletedModal
          isOpen={isCompletedModal}
          setIsOpen={setIsCompletedModal}
        />
        <footer className={styles.footer}>
          &copy; 2022 Dustb0x
        </footer>
      </div>
    </>
  )
}

export default AppView
