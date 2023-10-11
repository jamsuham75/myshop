import './App.css';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js';
import Card from './Card.js';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Cart</Nav.Link> */}

            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/0')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      <Routes>
      <Route path="/" element={
      <>
            <div className = "main-bg"></div>
              <div className='container'>
                <div className = "row">
                  {
                    shoes.map((a, i)=>{
                      return(
                        <Card shoes={shoes[i]} i = {i} key = {i}></Card>
                      )
                    })
                  }
/
                </div>
              </div> 
              <button onClick={()=>{
                // axios.get('https://jamsuham75.github.io/image/data2.json')
                // .then((result)=>{
                //   console.log(result.data);
                //   console.log(shoes);
                //   let copy = [...shoes, ...result.data];
                //   setShoes(copy);
                // })
                // .catch(()=>{
                //   console.log('실패 ㅅㄱ');
                // })

                fetch('https://jamsuham75.github.io/image/data2.json')
                .then(result => {
                  return result.json();
                })
                .then(data => {
                  console.log(data);
                  let copy = [...shoes, ...data];
                  setShoes(copy);
                })

              }}>더보기</button>
      </>
      
      }></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>}></Route>

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

function Test(){
  console.log("테스트");
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
