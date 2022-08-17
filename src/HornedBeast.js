import React from "react";

class HornedBeast extends React.Component {
  
  constructor(props){
    super(props)
    
    this.state = { count: 0 }
  }

  increment = (e) => {
    let nextState = {
      count: this.state.count + 1
    }

    this.setState( nextState );
  }

  render() {
    return (
      <section className="horned-beasts">
        <h2>{this.props.title}</h2>
        <img id={this.props.id} src={this.props.imageURL} title={this.props.imgTitle} alt={this.props.description} onClick={this.increment}/>
        <p>{this.props.description}</p>
        <p>Vote Count: {this.state.count}</p>
      </section>
    )
  }
}

export default HornedBeast;