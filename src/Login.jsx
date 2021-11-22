import React from 'react'
import {useState} from "react"
// import postData from './postData'
import { Link } from 'react-router-dom';

const Login = ({history}) => {
    const [userName,setNewUserName]=useState("");
    const [errorTextVisibility,setErrorTextVisibility]=useState(false)
    const loginUser=(e)=>{
            e.preventDefault();
            if(!userName) return;
            fetch(`http://192.168.1.42:8086/todos/${userName}`)

            .then((result)=>result.json())
            .then((value)=>{
                if(!value.length){
                    setErrorTextVisibility(true)
                    setTimeout(()=>{
                        setErrorTextVisibility(false);
                    },1500)
                    setNewUserName("");
                    return
                }
                localStorage.setItem("userName",userName)
                history.push("/learn/user")
            })  
    }
    if(localStorage.getItem("userName")){
        history.push("/learn/user")       //if username is present in local storage , it will re redirect to the user page 
    }
    return (
        <div className="container">
            <h1>Login</h1>
            <form style={{
                    display:"flex",
                    gridTemplateColumn:"auto auto",
                    justifyContent:"center",
                    position:"relative",

             }}
             onSubmit={loginUser}
             >
            
               
            <input type="text"
            value={userName}
            onChange={(e)=>{
                setNewUserName(e.target.value)
            }}
            />
            <button type="submit">Login</button>
            </form>
            {errorTextVisibility && <div className="error-text"> 
            
            Invalid Username</div>}
            <div className="link-section">
                    New User?
                    <Link to="/learn">Sign Up</Link>
                </div>
          
        </div>
    )
}

export default Login
