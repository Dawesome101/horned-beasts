import React from 'react';
import "../css/App.css"
import Header from '../component/Header.js';
import Main from '../component/Main.js'
import Footer from '../component/Footer.js';
import SelectedBeast from '../component/SelectedBeast.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import data from '../json/data.json'


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      beasts: data,
      selectedBeast: {},
      showModal: false
    }
  }

  handleOpenModal = (name) => {
    let singleBeast = data.find(beast => beast.title === name);
    this.setState({ selectedBeast: singleBeast, showModal: true });
  };

  handleCloseModal = () => {
    console.log('Handle close');
    this.setState({ showModal: false });
  };

  render(){
    return (
      <div className="app">
        <Container fluid>
          <Row>
            <Header />
          </Row>
          <Row>
            <Main 
              beasts={this.state.beasts}
              handleOpenModal={this.handleOpenModal}
              theSelectedBeast={this.state.selectedBeast}
            />
            <SelectedBeast 
              theSelectedBeast={this.state.selectedBeast}
              show={this.state.showModal}
              handleCloseModal={this.handleCloseModal}
            />
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
