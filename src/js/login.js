import React, {useState, useEffect} from "react";
import axios from 'axios';
import SignUp from "./signup";
import { Form, Button } from 'react-bootstrap';
import Header from "./Header";
import '../css/login.css'
import '../css/bootstrap.min.css';

function Login (){
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
  



    //인풋 변화 있을 때마다  value 값 변경
    const handleEmail=(event) =>{
        if(event.target.value === null){
            alert("이메일 주소를 입력하세요.")
        } 
        setEmail(event.target.value)
    }

    const handlePwd=(event) =>{
        if(event.target.value === null){
            alert("패스워드를 입력하세요.")
        } 
        setPwd(event.target.value)
    }
    
    const onClickLogin = () =>{
 
        
        fetch('http://34.64.161.129:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'token'
          
            },
            body: JSON.stringify({
              'email': email,
              'password': pwd,
            })
    })
    .then(res => res.json())
    .then(res =>{
        if (res.access_token === null){
            alert("주소와 패스워드를 모두 입력하세요.")
           
        }else if(res.access_token){
            localStorage.setItem('login-token', res.access_token)
       
            alert("로그인 성공!")
        }
        document.location.href = '/'
    })
}





    return(
        <div id="login-div">

<form id="loginForm" >
          <h1 id="login-label" >로그인</h1>
   
          <div  className="emailForm" >
            <label htmlFor="email" class="form-label mt-4">이메일 주소</label>
            <input type="email" name="email" value={email} onChange={handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
          <div  className="pwdFrom">
            <label htmlFor="pwd" class="form-label mt-4">Password</label>
            <input type="password" name="pwd" value={pwd} onChange={handlePwd} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div>
                <button type='button' onClick={onClickLogin}  class="btn btn-secondary" id='loginBtn'  >로그인</button>
                </div>
                <div id="textForm">
                    <p >Pliz 회원이 아니신가요?{""}
                        <a href="/sign-up">회원가입</a>
                    </p>
                    </div>
      </form>
</div>





    );
}

export default Login;