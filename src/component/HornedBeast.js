import React from "react";
import "../css/HornedBeast.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props)

    this.state = { 
      count: 0
    }
  }

  increment = (event) => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <section className="horned-beasts">
        <Card className="text-center" style={{ width: '18rem' }}>
          <Card.Img 
            variant="top" 
            onClick={() => this.props.handleOpenModal(this.props.imgTitle)}
            id={this.props.id}
            horns={this.props.horns}
            src={this.props.imageURL}
            title={this.props.imgTitle} 
            alt={this.props.description}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button variant="dark" onClick={this.increment}>Click to Vote</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Votes: {this.state.count} </Card.Footer>
        </Card>
      </section>
    )
  }
}

export default HornedBeast;