// Config
import React from 'react'
import styles from '@/styles/Home.module.css'
import { NEXT_APIS } from '@/config/constants/apis'
import { useMoralis } from 'react-moralis'

// Next UI
import { Card, Col, Container, Grid, Row, Text } from '@nextui-org/react'

// Components
import CompletedModal from '@/components/Modal/CompletedModal'
import NftDetailModal from '@/components/Modal/NftDetailModal'
import PageMeta from '@/components/Layout/PageMeta'
import TopNavbar from '@/components/Layout/TopNavbar'

const AppView: React.FC = () => {
  const { authenticate, isAuthenticated, logout, account, chainId } = useMoralis()

  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [isCompletedModal, setIsCompletedModal] = React.useState<boolean>(false)
  const [nfts, setNfts] = React.useState([])
  const [nft, setNft] = React.useState({})

  const openNftDetailModal = (nftData: any) => {
    setNft(nftData)
    setIsOpen(true)
  }

  const formatNftTitle = (symbol: string, tokenId: string | number) => {
    let title = `${symbol} # ${tokenId}`
    if (title.length > 20) {
      const str = title.toString().substring(0, 20)
      title = `${str}...`
    } 

    return title
  }

  React.useEffect(() => {
    if (isAuthenticated) {
      if (account && chainId) {
        const params = {
          address: account,
          chain: chainId
        }
        const query = new URLSearchParams(params)
        fetch(`${NEXT_APIS.v1.nfts}?${query}`, {})
        .then((data) => {
          data.json()
            .then((data) => {
              setNfts(data)
              console.log(data)
            })
        })
      }
    } else {
      setNfts([])
    }
  }, [isAuthenticated, account, chainId, setNfts])

  return (
    <>
      <PageMeta />
      <TopNavbar
        isAuthenticated={isAuthenticated}
        authenticate={authenticate}
        logout={logout}
      />
      <div className={styles.container}>
        {!isAuthenticated ? (
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
              {nfts.map((data: any) => {
                return (
                  <Grid xs={12} sm={2} justify="center">
                    <Card
                      id={`card-${data.id}`}
                      isPressable
                      isHoverable
                      css={{ 
                        m: 10
                      }}
                      onClick={() => openNftDetailModal(data)}
                    >
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={data.metadata.image}
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
                              {formatNftTitle(data.symbol, data.tokenId)}
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
          nft={nft}
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
