
import './css/App.css';
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import './css/bootstrap.min.css';

import Mypage from './mypage/Mypage';
import Auth from './login/Auth';
import KakaoSocialLogin from './login/KakaoSocialLogin';
import Profile from './mypage/profile';
import Playlist from './mypage/playlist';
import Follow from './mypage/Follow';
import Follower from './mypage/Follower';

function App() {
  
  //로그인 된 상태인지 아닌지 체크
 // const [login, setLogin] = useState(false);


  //useEffect(()=>{
    //로그인 완료하면 mypage로 넘어가기
    //setLogin(true);
    
 // },[]);
  return (
   
    <>
   
      <Router>
      <Routes>
        <Route path='/login' element ={<KakaoSocialLogin />}/>
        <Route path='/oauth/kakao/callback' element={<Auth />}/>
        <Route path='/playlist' element={<Playlist />}/>
        <Route path='/community' element={<Playlist />}/> //커뮤니티(게시글)수정해야함
        <Route path='/follow' element={<Follow />}/>
        <Route path='/follower' element={<Follower />}/>
        <Route path='/profile' element={<Profile />}/>
      
      </Routes>
    </Router>
  
   </>  
     
  );
}


export default App;

