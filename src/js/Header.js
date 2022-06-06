import { React, useEffect, useState } from "react";
import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';
function Header() {

  const [isLogin, setIsLogin] = useState(false)
  const [id, setID] = useState();

  useEffect(() => {
    if (localStorage.getItem('login-token') === null) {
      console.log('isLogin?? ::', isLogin)
    } else {
      setIsLogin(true);
      console.log('??isLogin?? ::', isLogin)

    }
  }, [])

  useEffect(() => {
    fetch('http://34.64.161.129:5000/my-info', {
      headers: {
        "Authorization": localStorage.getItem('login-token')

      }
    })
      .then(res => res.json())
      .then(res => {
        setID(res.user_id);
      });
  }, [])



  return (

<div>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Pliz</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="/aboutus">서비스소개
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <NavDropdown title="커뮤니티" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/info-community">
                  정보 커뮤니티
                </NavDropdown.Item>
                <NavDropdown.Item href="/playlist-community">
                  플리 커뮤니티
                </NavDropdown.Item>
              </NavDropdown>
            <li class="nav-item">
              <a class="nav-link" href="/merge">플레이리스트 병합</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/ranking">랭킹</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/playlist">플레이리스트 만들기</a>
            </li>

            <li class="nav-item">
              {isLogin ? (
                <a class="nav-link" href={`/my-info/${id}`} >마이페이지</a>
              ) : (<a class="nav-link" href="/login" >로그인</a>)}
            </li>
         </ul>
      
        </div>
      </div>
    </nav>


</div>

  );
}

export default Header;
