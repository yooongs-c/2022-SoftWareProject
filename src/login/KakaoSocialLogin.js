import React, { useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import {KAKAO_AUTH_URL} from './Auth'
import loginimg from '../img/kakao_login_medium_wide.png';
function KakaoSocialLogin(){

    
    return(

        
        <h2><a href={KAKAO_AUTH_URL}>
            <img src={loginimg}/>
            </a></h2>
       
          
        );    
}

export default KakaoSocialLogin;