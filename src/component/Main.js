import React from "react";
import HornedBeast from '../component/HornedBeast.js'
import data from '../json/data.json'
import "../css/Main.css"

class Main extends React.Component {

  render() {
    return (
      <main className='main'> {
          data.map((v) => {
            return <HornedBeast 
            key = {v._id}
            title={v.title}
            id={v._id}
            imageURL={v.image_url}
            imgTitle={v.title}
            description={v.description}/>;
          })
        }
      </main>
    )
  }
}

export default Main;