import React, {useState, useEffect} from "react";
import axios from 'axios';
import SignUp from "./signup";
import { Form, Button } from 'react-bootstrap';

function Login (){
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    
    //인풋 변화 있을 때마다  valur 값 변경
    const handleEmail=(event) =>{
        setEmail(event.target.value)
        console.log(event.target.value)
    }

    const handlePwd=(event) =>{
        setPwd(event.target.value)
    }
    
    const onClcikLogin = () =>{
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
        console.log(res.access_token)
        if (res.access_token){
            localStorage.setItem('login-token', res.access_token)
        }
    })
}

  

    useEffect(()=>{
        axios.get('http://34.64.161.129:5000/login')
        .then(res=>console.log(res))
        .catch()
    }

    ,[])

    return(
        
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor="email">이메일 주소:</label>
                <input type="text" name="email" value={email} onChange={handleEmail}></input>
            </div>
            <div>
                <label htmlFor="pwd">비밀번호:</label>
                <input type="text" name="pwd" value={pwd} onChange={handlePwd}></input>
            </div>
            <div>
                <button type='button' onClick={onClcikLogin}>로그인</button>
                <h6>Pliz 회원이 아니신가요?</h6>
                <a>회원가입</a>
            </div>
        </div>


    )
}

export default Login;
