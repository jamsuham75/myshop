import './App.css';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  let [shoes] = useState(data);
  console.log(shoes[0].title);

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      <Routes>
      <Route path="/" element={
      <>
            <div className = "main-bg" style={{backgroundImage : 'url(' + bg + ')' }}></div>
              <div className='container'>
                <div className = "row">
                    {/* <Card shoes={shoes[0]} i = {1}></Card>
                    <Card shoes={shoes[1]} i = {2}></Card>
                    <Card shoes={shoes[2]} i = {3}></Card> */}
                  {
                    shoes.map(function(a, i){
                      return(
                        <Card shoes={shoes[i]} i = {i}></Card>
                      )
                    })
                  }
                </div>
              </div> 
      </>
      


      }></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
        <Route path="/about" element={<div>어바웃페이지임</div>}></Route>
      </Routes>

    </div>
  );
}

function Detail(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

function Card(props){
  return(
    <div className = "col-md-4">
      {/* <img src = {shoes1} width="80%"></img> */}
      <img src = {process.env.PUBLIC_URL + "/shoes" + (props.i + 1) + ".jpg"} width="80%"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
