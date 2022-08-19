import React from "react";
import "../css/Main.css"
import HornedBeast from '../component/HornedBeast.js'


class Main extends React.Component {

  render() {
    return (
      <main className='main'> {
        this.props.beasts.map((v, idx) => {
            return <HornedBeast 
              key={idx}
              id={v._id}
              horns={v.horns}
              title={v.title}
              imageURL={v.image_url}
              imgTitle={v.title}
              description={v.description}
              handleOpenModal={this.props.handleOpenModal}
              theSelectedBeast={this.props.theSelectedBeast}
            />;
          })
        }
      </main>
    )
  }
}

export default Main;