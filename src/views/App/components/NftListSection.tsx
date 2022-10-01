// Config
import React from 'react'

// Next UI
import { Col, Card, Grid, Row, Text } from '@nextui-org/react'

// Components
import CompletedModal from '@/components/Modal/CompletedModal'
import NftDetailModal from '@/components/Modal/NftDetailModal'

interface NftListSection {
  isAuthenticated: boolean
  account: string | null
  nfts: any
}

const NftListSection: React.FC<NftListSection> = ({
  isAuthenticated,
  account,
  nfts
}) => {
  const [nft, setNft] = React.useState<any>({})
  const [completedModal, setCompletedModal] = React.useState<boolean>(false)
  const [nftDetailModal, setNftDetailModal] = React.useState<boolean>(false)

  /**
   * NFTタイトルの文字数制御
   * @param symbol string
   * @param tokenId string | number
   * @returns string
   */
  const formatNftTitle = (symbol: string, tokenId: string | number): string => {
    let title = `${symbol} # ${tokenId}`
    if (title.length > 20) {
      const str = title.toString().substring(0, 20)
      title = `${str}...`
    } 

    return title
  }

  /**
   * NFT詳細ダイアログの表示
   * @param nftData any
   */
  const openNftDetailModal = (nftData: any) => {
    setNft(nftData)
    setNftDetailModal(true)
  }

  return (
    <>
    {isAuthenticated &&
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
                        {data.name}
                      </Text>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          )
        })}
      </Grid.Container>
    }
    <NftDetailModal
      isOpen={nftDetailModal}
      setIsOpen={setNftDetailModal}
      isLoading={false}
      account={account}
      contractType={nft.contractType}
      tokenAddress={nft.tokenAddress}
      tokenId={nft.tokenId}
      name={nft.name}
      symbol={nft.symbol}
      image={nft.metadata?.image}
    />
    <CompletedModal
      isOpen={completedModal}
      setIsOpen={setCompletedModal}
    />
    </>
  )
}

export default NftListSection
