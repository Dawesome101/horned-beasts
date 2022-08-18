
import "../css/App.css"
import React from 'react';
import Header from '../component/Header.js';
import Main from '../component/Main.js'
import Footer from '../component/Footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class App extends React.Component {
  render(){
    return (
      <div class="app">
        <Container fluid>
          <Row>
            <Header />
          </Row>
          <Row>
            <Main />
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
