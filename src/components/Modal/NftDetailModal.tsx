// Config
import React from 'react'

// Next UI
import { Button, Modal, Loading, Image, Text } from '@nextui-org/react'

interface NftDetailModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isLoading?: boolean
  nft: any
}

const NftDetailModal: React.FC<NftDetailModalProps> = ({
  isOpen,
  setIsOpen,
  isLoading,
  nft
}) => {
  const closeHandler = () => {
    setIsOpen(false);
    console.log("closed");
  }

  return (
    <Modal
      preventClose
      aria-labelledby="modal-title"
      open={isOpen}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          <Text b size={18}>
            METAKAWAII
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text>
          Throw away NFTs?<br />
          NFT once discarded cannot be recovered.
        </Text>
        <Text>
          Contract type: {nft.contractType}<br />
          NFT contract address: {nft.tokenAddress}<br />
          Token ID: {nft.tokenId}<br />
          Name: {nft.name}<br />
          Symbol: {nft.symbol}<br />
          {nft}
        </Text>
        <Image
          src={nft.metadata?.image}
          showSkeleton
          alt="Default Image"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={() => setIsOpen(false)}>
          {isLoading ? (
            <Loading type="points-opacity" color="currentColor" size="sm" />
          ) : (
            "Close"
          )}
        </Button>
        <Button auto shadow color="gradient" onClick={closeHandler}>
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
