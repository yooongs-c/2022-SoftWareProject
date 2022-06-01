import React, {useState, useEffect} from "react";
import axios from 'axios';
import SignUp from "./signup";
import { Form, Button } from 'react-bootstrap';
import Header from "./Header";

function Login (){
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    
    //인풋 변화 있을 때마다  value 값 변경
    const handleEmail=(event) =>{
        setEmail(event.target.value)
        console.log(event.target.value)
    }

    const handlePwd=(event) =>{
        setPwd(event.target.value)
        console.log(event.target.value)
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
        console.log(res)
        console.log(res.access_token)
        if (res.access_token){
            localStorage.setItem('login-token', res.access_token)
        }
        document.location.href = '/'
    })

    alert("로그인 성공!")
}

const onClickRegister = () => {
 document.location.href = "/sign-up"
}



    return(
     
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor="email">이메일 주소:</label>
                <input type="email" name="email" value={email} onChange={handleEmail}></input>
            </div>
            <div>
                <label htmlFor="pwd">비밀번호:</label>
                <input type="password" name="pwd" value={pwd} onChange={handlePwd}></input>
            </div>
            <div>
                <button type='button' onClick={onClcikLogin}>로그인</button>
                <h6>Pliz 회원이 아니신가요?</h6>
                <button type='button' onClick={onClickRegister}>회원가입</button>
            </div>
        </div>


   /*
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  defaultValue={email} onChange={handleEmail}/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" defaultValue={pwd} onChange={handlePwd}/>
  </Form.Group>
  <Button variant="primary" type="button" onClick={onClcikLogin}>
    Login
  </Button>
  <Form.Text className="text-muted">Pliz 회원이 아니신가요?</Form.Text>
 <Button href="/sign-up">회원가입</Button>

</Form>

*/
    )
}

export default Login;
