// Config
import React from 'react'
import styles from '@/styles/Home.module.css'

// Next UI
import { Button, Modal, Grid, Loading, Image, Text } from '@nextui-org/react'

interface NftDetailModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isLoading?: boolean
  account: string | null
  contractType: any
  tokenAddress: any
  tokenId: any
  name: any
  symbol: any
  image: any
}

const NftDetailModal: React.FC<NftDetailModalProps> = ({
  isOpen,
  setIsOpen,
  isLoading,
  account,
  contractType,
  tokenAddress,
  tokenId,
  name,
  symbol,
  image
}) => {
  const formatContractAddress = (contractAddress: string) => {
    const prefix = String(contractAddress).substring(0, 25)
    return `${prefix}...`
  }

  const formatTokenId = (tokenId: string) => {
    let newTokenId = String(tokenId)
    if (newTokenId.length > 22) {
      const prefix = newTokenId.substring(0, 22)
      newTokenId = `${prefix}...`
    }
    return newTokenId
  }

  const handleThrowAway = async () => {
    try {
      if (!account) return

      /*
      setIsLoading(true)
      setCompleteModal(false)
      
      const tx = await transferFrom(
        account,
        process.env.dustb0xOwnerAddress,
        nftData?.tokenId ?? ''
      )

      if (tx.lenght === 0) {
        throw new Error('MetaMask Tx Signature: User denied transaction signature. ')
      }

      await tx.wait()

      await getMyNfts()

      setIsLoading(false)
      setCompleteModal(true)
      */

      setIsOpen(false)
    } catch (e) {
      // setIsLoading(false)
    }
  }

  return (
    <Modal
      css={{
        mx: 25,
      }}
      preventClose
      width="800px"
      open={isOpen}
    >
      <Modal.Body>
        <Grid.Container gap={2}>
          <Grid xs={12} justify="center">
            <Text
              span
              color="secondary"
              css={{
                textAlign: "center",
              }}
            >
              Throw away NFTs?<br />
              NFT once discarded cannot be recovered.
            </Text>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Image
              src={image}
              showSkeleton
              alt="NFT Image"
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Grid.Container gap={2}>
              <Grid md={12} direction="column">
                <Text small>Name</Text>
                <Text>{name}</Text>
              </Grid>
              <Grid md={12} direction="column">
                <Text small>Symbol</Text>
                <Text>{symbol}</Text>
              </Grid>
              <Grid md={12} direction="column">
                <Text small>Contract Address</Text>
                <Text>{formatContractAddress(tokenAddress)}</Text>
              </Grid>
              <Grid md={12} direction="column">
                <Text small>Token ID</Text>
                <Text>{formatTokenId(tokenId)}</Text>
              </Grid>
              <Grid md={12} direction="column">
                <Text small>Token Standard</Text>
                <Text>{contractType}</Text>
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={() => setIsOpen(false)}>
          {isLoading ? (
            <Loading type="points-opacity" color="currentColor" size="sm" />
          ) : (
            "Close"
          )}
        </Button>
        <Button auto shadow color="gradient" onClick={() => setIsOpen(false)}>
          {isLoading ? (
            <Loading type="points-opacity" color="currentColor" size="sm" />
          ) : (
            "Throw Away"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NftDetailModal
