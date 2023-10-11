import './App.css';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';


function App() {

  let [shoes] = useState(data);
  console.log(shoes[0].title);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      <div className = "main-bg" style={{backgroundImage : 'url(' + bg + ')' }}></div>

      <div className='container'>
        <div className = "row">
          <div className = "col-md-4">
            {/* <img src = {shoes1} width="80%"></img> */}
            <img src = {process.env.PUBLIC_URL + "/shoes1.jpg"} width="80%"></img>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className = "col-md-4">
            {/* <img src = {shoes2} width="80%"></img> */}
            <img src = {process.env.PUBLIC_URL + "/shoes2.jpg"} width="80%"></img>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className = "col-md-4">
            {/* <img src = {shoes3} width="80%"></img> */}
            <img src = {process.env.PUBLIC_URL + "/shoes3.jpg"} width="80%"></img>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
