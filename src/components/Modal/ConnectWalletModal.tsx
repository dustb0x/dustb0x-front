// Config
import React from 'react'

// Next UI
import { Card, Button, Grid, Modal, Text, Row } from '@nextui-org/react'

interface ConnectWalletModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({
  isOpen,
  setIsOpen
}) => {
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      css={{
        mx: 25
      }}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          <Text b size={18}>
            Connect Wallet
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Grid.Container justify="center">
          <Grid xs={6}>
            <Card
              isPressable
              isHoverable
              variant="flat"
              css={{
                pt: 20,
                pb: 10
              }}
              onClick={() => setIsOpen(false)}
            >
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                width={60}
              />
              </Card.Body>
              <Card.Footer>
                <Row justify="center" align="center">
                  <Text b>Metamask</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConnectWalletModal
