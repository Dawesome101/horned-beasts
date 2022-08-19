import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component{
  render() {
    return (
      <>
        <Modal 
          show={this.props.show} 
          onHide={this.props.handleCloseModal}
          size="lg" 
          aria-labelledby="contained-modal-title-vcenter" 
          centered>
          <Modal.Header closeButton>
            <Modal.Title >{this.props.theSelectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img 
              variant="top"
              id={this.props.theSelectedBeast.id}
              src={this.props.theSelectedBeast.image_url}
              title={this.props.theSelectedBeast.title}/>
              <p>Description: {this.props.theSelectedBeast.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast