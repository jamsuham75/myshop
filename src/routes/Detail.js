/* eslint-disable no-undef */
import Nav from 'react-bootstrap/Nav';
import {useParams, useNavigate} from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import './../App.css';

import { Context1 } from './../App';

function Detail(props){
  
  let {재고, shoes} = useContext(Context1);

  let [fade2, setFade2] = useState('');
  let navigate = useNavigate();

  useEffect(()=>{
    setFade2('end')
    return ()=>{
      setFade2('')
    }
  },[])

  let {id} = useParams();
  console.log(id);
  let 찾은상품 = shoes.find(function(x){
    return x.id == id;
  })

  let [탭, 탭변경] = useState(1);

    return(
      <div className={"container start " + fade2}>
        <div className="row">
          <div className="col-md-6">
            {/* <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" /> */}
            <img src={`https://jamsuham75.github.io/image/shoes${Number(id)+1}.jpg`} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>
            <button className="btn btn-danger" onClick={()=>{navigate('/cart')}}>주문하기</button> 
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link-0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link-1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link-2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent 탭={탭}></TabContent>
      
      </div> 
    )
  }
  
  function TabContent({탭}){
    let [fade, setFade] = useState('');
    let {재고, shoes} = useContext(Context1);

    useEffect(()=>{
      setTimeout(()=>{setFade('end')},1000)
      return ()=>{
        setFade('');
      }
    }, [탭])

    return <div className={'start ' + fade}>
      {[<div>{재고[0]}</div>,<div>{재고[1]}</div>,<div>{재고[2]}</div>][탭]}
    </div> 
    
  }

  export default Detail;