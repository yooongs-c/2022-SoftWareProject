import {React, useState, useEffect} from 'react';
import Login from './js/login';
import SignUp from './js/signup';
import Home from './js/home';
import Mypage from './js/mypage';
import Header from './js/Header';
import AboutUs from './js/AboutUs';
import Userpage from './js/Userpage';

import '../src/css/bootstrap.min.css';
import '../src/css/App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

function App() {

  return(
      <div>
    
    <div>
      
      
        <Router>
        <Header />
  
        <Routes>
        <Route path='/' element ={<Home />}/>
          <Route path='/login' element ={<Login />}/>
          <Route path='/my-info/:id' element ={<Mypage />}/> 
          <Route path='/user-info/:id' element={<Userpage />}/>  
          <Route path='/sign-up' element ={<SignUp />}/>
          <Route path='/aboutus' element={<AboutUs/>}/>

  
        </Routes>
      </Router>
   
     
       
    </div>
   
      </div>
  )
}

export default App;
