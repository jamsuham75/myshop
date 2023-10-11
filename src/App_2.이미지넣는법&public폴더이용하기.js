import './App.css';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import bg from './img/bg.png';
// import shoes1 from './img/shoes1.jpg';
// import shoes2 from './img/shoes2.jpg';
// import shoes3 from './img/shoes3.jpg';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function App() {
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
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className = "col-md-4">
            {/* <img src = {shoes2} width="80%"></img> */}
            <img src = {process.env.PUBLIC_URL + "/shoes2.jpg"} width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className = "col-md-4">
            {/* <img src = {shoes3} width="80%"></img> */}
            <img src = {process.env.PUBLIC_URL + "/shoes3.jpg"} width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
