import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

function ImageModal({ show, handleClose, file, saveImage }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>How2 Image Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={file} fluid />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Let's Try Again
          </Button>
          <Button variant='success' onClick={saveImage}>
            Save Image
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ImageModal
