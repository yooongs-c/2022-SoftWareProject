import React from 'react';
import { useEffect } from "react";
import axios from "axios";

const REST_API_KEY = "4a2203d4faf4df3b4aff44db2467736e"; //rest api key
const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback"; 
    
const Auth = () => {

    const CLIENT_SECRET = "djivaxaUOESLytK4YXzTsirdSTdGBsBW"; 
      useEffect(()=> {
        let params = new URL(document.location.toString()).searchParams;
        let code = params.get("code"); // 인가코드 받는 부분
        let grant_type = "authorization_code";
        let client_id = REST_API_KEY;
    
        axios.post(`https://kauth.kakao.com/oauth/token?
            grant_type=${grant_type}
            &client_id=${client_id}
            &redirect_uri=${REDIRECT_URI}
            &code=${code}`
            , {
               
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then((res) => {
          console.log(res)
          // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
      })
      }, [])
    
    return null;
};
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export default Auth;