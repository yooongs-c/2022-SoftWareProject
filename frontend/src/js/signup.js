import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';


function SignUp (){
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [name, setName] = useState('')
    
    //인풋 변화 있을 때마다  valur 값 변경
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
            <h2>회원가입</h2>
            <div>
                <label htmlFor="email">이메일 주소:</label>
                <input type="email" name="email" value={email} onChange={handleEmail}></input>
            </div>
            <div>
                <label htmlFor="pwd">비밀번호:</label>
                <input type="password" name="pwd" value={pwd} onChange={handlePwd}></input>
            </div>
            <div>
                <label htmlFor="name">이름</label>
                <input type="text" name="inputName" value={name} onChange={handleName}></input>
            </div>
            <div>
                <button type='button' onClick={onClickRegister}>가입하기</button>
         
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

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" defaultChecked={name} onChange={handleName} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={onClickRegister}>
          Sign-up
        </Button>
      </Form>
         */
    )
}

export default SignUp;
