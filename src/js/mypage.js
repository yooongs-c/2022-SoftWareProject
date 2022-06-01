import { Button } from "bootstrap";
import React from "react";

function Mypage (){

    const onClickLogout =() =>{
        localStorage.removeItem('login-token')
        document.location.href = '/'
    }
    return(
        <><h1>Mypage</h1>
        <button type='button' onClick={onClickLogout}> Logout</button></>
    );
}

export default Mypage;
