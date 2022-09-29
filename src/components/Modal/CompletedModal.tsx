// Config
import React from 'react'

// Next UI
import { Button, Modal, Loading, Image, Row, Text } from '@nextui-org/react'

interface NCompletedModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CompletedModal: React.FC<NCompletedModalProps> = ({
  isOpen,
  setIsOpen
}) => {
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          <Text b size={18}>
            RESULT
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Row justify="center" align="center">
          <Text>
            Success. Is your wallet clean ?
          </Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CompletedModal
