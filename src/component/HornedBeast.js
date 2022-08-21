import React from "react";
import "../css/HornedBeast.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  render() {
    return (
      <div>
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
              <Button variant="dark" onClick={() => this.props.updateBeastCount(this.props.id)}>Click to Vote</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Votes: {this.props.beastVoteCount[this.props.id-1].beastCount}</Card.Footer>
          </Card>
        </section>
      </div>
    )
  }
}

export default HornedBeast;