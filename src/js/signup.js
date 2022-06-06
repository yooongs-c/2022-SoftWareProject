import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';


function SignUp (){
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [name, setName] = useState('')
    
    //인풋 변화 있을 때마다  value 값 변경
    const handleEmail=(event) =>{
        setEmail(event.target.value)
        console.log(event.target.value)
    }

    const handlePwd=(event) =>{
        setPwd(event.target.value)
    }

    const handleName=(event) =>{
        setName(event.target.value)
    }
    
    const onClickRegister = () =>{


       fetch('http://34.64.161.129:5000/sign-up', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      "Authorization": 'token'

  },
  body: JSON.stringify({
    'email': email,
    'password': pwd,
    'name': name
  })
})
.then(response => response.json())
.then(response => {
  if (response.token) {
    localStorage.setItem('wtw-token', response.token);
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
  
            <div id="login-div">

<form id="loginForm" >
          <h1 id="login-label">회원가입</h1>
   
          <div  className="emailForm" >
            <label htmlFor="email" class="form-label mt-4">이메일 주소</label>
            <input type="email" name="email" value={email} onChange={handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
          <div  className="pwdFrom">
            <label htmlFor="pwd" class="form-label mt-4">Password</label>
            <input type="password" name="pwd" value={pwd} onChange={handlePwd} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div>
                <label htmlFor="name" class="form-label mt-4" >이름</label>
                <input type="text" name="inputName" value={name} onChange={handleName} class="form-control" placeholder="Name"></input>
            </div>
            <div id='regBtn'>
                <button type='button' class="btn btn-secondary" onClick={onClickRegister} >가입하기</button>
            </div>
      </form>
</div>
        </div>

    )
}

export default SignUp;