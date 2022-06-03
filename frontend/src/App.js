import {React, useState, useEffect} from 'react';
import Login from './js/login';
import SignUp from './js/signup';
import Home from './js/home';
import Mypage from './js/mypage';

import '../src/css/App.css';
import { Nav, Navbar,Container, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

function App() {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
      if(localStorage.getItem('login-token') === null){
          console.log('isLogin?? ::', isLogin)
      }else {
          setIsLogin(true);
          console.log('??isLogin?? ::', isLogin)
          
      }
  })
  return(
      <div>
        
    
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Pliz</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">서비스 소개</Nav.Link>
              <NavDropdown title="커뮤니티" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">정보 커뮤니티</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">플리 커뮤니티</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/merge">플레이리스트 병합</Nav.Link>
              <Nav.Link href="/ranking">랭킹</Nav.Link>
              
              {isLogin?(<Nav.Link href="/mypage">마이페이지</Nav.Link>)
              :
              (<Nav.Link href="/login">로그인</Nav.Link>)}
              
            </Nav>
            </Navbar.Collapse>
        </Container>
       </Navbar>


    <div>
      
      {isLogin ?(
        <Router>
        <Routes>
        <Route path='/home' element ={<Home isLogin={isLogin}/>}/>
          <Route path='/login' element ={<Login />}/>
          <Route path='/mypage' element ={<Mypage />}/>
  
        </Routes>
      </Router>
      )
        
        :(
          <Router>
      <Routes>
      <Route path='/home' element ={<Home />}/>
        <Route path='/login' element ={<Login />}/>
        <Route path='/sign-up' element ={<SignUp />}/>

      </Routes>
    </Router>
        )
       
        }
 
       
    </div>
   
      </div>
  )
}

export default App;
