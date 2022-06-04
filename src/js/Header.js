import {React, useEffect, useState} from "react";
//import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import '../css/bootstrap.min.css';
import Login from "./login";
import Home from "./home";
import Mypage from "./mypage";
import Page from "./Page";

function Header(){

  const [isLogin, setIsLogin] = useState(false)
  const [id, setID] = useState();

  useEffect(()=>{
      if(localStorage.getItem('login-token') === null){
          console.log('isLogin?? ::', isLogin)
      }else {
          setIsLogin(true);
          console.log('??isLogin?? ::', isLogin)
          
      }
  },[])

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



    return(
   

       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <div className="container-fluid">
         <a className="navbar-brand" href="/">Pliz</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
     
         <div className="collapse navbar-collapse" id="navbarColor02">
           <ul className="navbar-nav me-auto">
             <li className="nav-item">
               <a className="nav-link active" href="/aboutus">서비스소개
                 <span className="visually-hidden">(current)</span>
               </a>
             </li>
             <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">커뮤니티</a>
               <div className="dropdown-menu">
                 <a className="dropdown-item" href="/info-community">정보 커뮤니티</a>
                 <a className="dropdown-item" href="#">플리 커뮤니티</a>
               </div>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">플레이리스트 병합</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">랭킹</a>
             </li>
             <li className="nav-item">
              
      
                
               {isLogin ? (
             
               <Link to ={`/my-info/${id}`}>마이페이지</Link>
              
             ):(
              
                <a className="nav-link" href="/login" >로그인</a> 
                
               )

               }

           
               </li>


 


             </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder="Search"/>
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
}

export default Header;
