import './App.css';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js';
import Card from './Card.js';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  console.log(shoes[0].title);

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Cart</Nav.Link> */}

            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
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
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>위치정보</div>}></Route>
        </Route>

        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>}></Route>
        </Route>
        <Route path="*" element={<div>없는페이지임</div>}></Route>
      </Routes>

    </div>
  );
}

function About() {
  return (
    <div>
      <h3>회사 정보임</h3>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
