
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

import Playlist from './playlist';
import Profile from './profile';
import Follow from './Follow';
import Follower from './Follower';

function Mypage() {
  
  
  return (
    <><div>
    
      <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/mypage">Mypage</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/playlist">Playlist</Nav.Link>
      <Nav.Link href="/follow">Follow</Nav.Link>
      <Nav.Link href="/follower">Follower</Nav.Link>
      <Nav.Link href="/likeplaylist">LIKE</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    </div>
    </>

  );
}
export default Mypage;

