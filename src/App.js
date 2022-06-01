import {React, useState} from 'react';
import Login from './js/login';
import SignUp from './js/signup';
import Home from './js/home';

import '../src/css/App.css';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

function App() {

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
              <Nav.Link href="/login"  >로그인</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
       </Navbar>

       <Router>
      <Routes>
      <Route path='/home' element ={<Home />}/>
        <Route path='/login' element ={<Login />}/>

      </Routes>
    </Router>


      </div>
  )
}

export default App;
