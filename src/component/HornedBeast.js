import "../css/HornedBeast.css"
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props)

    this.state = { 
      count: 0,
      show: false
    }
  }

  increment = (e) => {
    let nextState = {
      count: this.state.count + 1
    }

    this.setState(nextState);
  }

  handleOpenModal = () => {
    this.setState({ show: true })
  }

  handleCloseModal = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <section className="horned-beasts">
        <Card className="text-center" style={{ width: '18rem' }}>
          <Card.Img variant="top" onClick={this.handleOpenModal} id={this.props.id} src={this.props.imageURL} title={this.props.imgTitle} alt={this.props.description} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button variant="dark" onClick={this.increment}>Click to Vote</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Votes: {this.state.count}</Card.Footer>
        </Card>
        <Modal 
          show={this.state.show} 
          onHide={this.handleCloseModal} 
          size="lg" 
          aria-labelledby="contained-modal-title-vcenter" 
          centered>
          <Modal.Header closeButton>
            <Modal.Title >{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img 
              variant="top" 
              id={this.props.id} 
              src={this.props.imageURL} 
              title={this.props.imgTitle} 
              alt={this.props.description} />

            <p>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    )
  }
}

export default HornedBeast;