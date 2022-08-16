import React from "react";

class HornedBeast extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <section className="horned-beasts">
        <h2>{this.props.h2title}</h2>
        <img src={this.props.imgSrc} alt={this.props.altTxt} title={this.props.imgTitle} />
        <p>{this.props.description}</p>
      </section>
    )
  }
}

export default HornedBeast;