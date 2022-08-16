import React from "react";
import HornedBeast from './HornedBeast.js'
import hornedbeastgoat01 from './horned-beast-goat.JPG'
import hornedbeastgoat02 from './horned-beast-goat2.JPG'

class Main extends React.Component {
  
  render() {
    return (
      <main className='main'>
        <HornedBeast h2title='Horned Beast - Goat Close-Up' imgSrc={hornedbeastgoat01} altTxt='Horned Goat Close-up' imgTitle='Horned Beast Goat 01' description='A close-up shot of a Goat staring straight into the camera.'/>
        <HornedBeast h2title='Horned Beast - Goat' imgSrc={hornedbeastgoat02} altTxt='Horned Goat' imgTitle='Horned Beast Goat 02' description='A goat standing sideways looking directly into the camera.'/>
      </main>
    )
  }
}

export default Main;