import {React, useState, useEffect} from 'react';
import Login from './js/login';
import SignUp from './js/signup';
import Home from './js/home';
import Mypage from './js/mypage';
import Header from './js/Header';
import AboutUs from './js/AboutUs';
import Userpage from './js/Userpage';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MakePlaylist from './js/makePlaylist';
import Playlistdetail from './js/PlaylistDetail';
import PlaylistCommunity from './js/PlaylistCommunity';
import InfoCommunity from './js/InfoCommunity';
import Ranking from './js/Ranking';

function App() {

  return(
      <div>
    
    <div>
      
    <Header />
        <Router>
        
  
        <Routes>
        <Route path='/' element ={<Home />}/>
          <Route path='/login' element ={<Login />}/>
          <Route path='/my-info/:id' element ={<Mypage />}/> 
          <Route path='/user-info/:id' element={<Userpage />}/>  
          <Route path='/playlist-community' element={<PlaylistCommunity />}></Route>
          <Route path='/playlist-community-id/:id' element={<Playlistdetail />}/>  
          <Route path='/sign-up' element ={<SignUp />}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/makeplaylist' element={<MakePlaylist/>}/>
          <Route path='/info-community' element={<InfoCommunity/>}/>
          <Route path='/ranking' element={<Ranking/>}/>
          
             
                

  
        </Routes>
      </Router>
   
     
       
    </div>
   
      </div>
  )
}

export default App;
