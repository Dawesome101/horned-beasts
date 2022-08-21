import React from 'react';
import '../css/App.css';
import Header from '../component/Header.js';
import Main from '../component/Main.js'
import Footer from '../component/Footer.js';
import SelectedBeast from '../component/SelectedBeast.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import data from '../json/data.json'
import voteCount from '../json/beastCount.json'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      beasts: data,
      beastVoteCount: voteCount,
      selectedBeast: {},
      showModal: false,
    }
  }

  updateBeastCount = (id) => {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.beastVoteCount = stateCopy.beastVoteCount.slice();
    stateCopy.beastVoteCount[id - 1] = Object.assign({}, stateCopy.beastVoteCount[id - 1]);
    stateCopy.beastVoteCount[id - 1].beastCount += 1;
    this.setState(stateCopy);
  }

  handleOpenModal = (name) => {
    let singleBeast = data.find(beast => beast.title === name);
    this.setState({ selectedBeast: singleBeast, showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  getHornCount = () => {
    let tempArray = ['All Beasts'];
    data.forEach((v) => {
      if(!tempArray.includes(v.horns)){
        tempArray.push(v.horns);
      }
    })
    return tempArray;
  }

  getBeasts = (event) => {
    let tempArray = [];
    data.forEach((v) => {
      if(v.horns === +event.target.value){
        tempArray.push(v);
      }
    })

    if(tempArray.length === 0){
      this.setState({beasts: data});
    } else {
      this.setState({beasts: tempArray})
    }
  }

  render(){
    return (
      <div className="app"> 
        <Container fluid>
          <Row id='form-row'>
            <Header />
            <form id='horn-form'>
                <Form.Select id='form-select' defaultValue='Filter Horned Beasts' aria-label="Default select example" onChange={this.getBeasts}>
                  <option disabled>Filter Horned Beasts</option>
                  {
                    this.getHornCount().map ((v, i) => {
                      return <option 
                        key={i}
                        value={v}>{`Horns: ${v.toString()}`}
                      </option>
                    })
                  }
                </Form.Select>
            </form>
          </Row>
          <Row>
            <Main 
              beasts={this.state.beasts}
              handleOpenModal={this.handleOpenModal}
              theSelectedBeast={this.state.selectedBeast}
              updateBeastCount={this.updateBeastCount}
              beastVoteCount={this.state.beastVoteCount}
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
