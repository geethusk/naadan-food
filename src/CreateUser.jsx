import React from 'react'
import {useState} from "react"
import postData from './postData'
import { Link } from 'react-router-dom'


const CreateUser = ({history},result) => {
    const [userName,setNewUserName]=useState("");
    const [errorTextVisibility,setErrorTextVisibility]=useState(false)
    const CreateNewUser=(e)=>{
            e.preventDefault();
            if(!userName) return
            fetch(`http://192.168.1.42:8086/todos/${userName}`)
            .then((result)=>result.json())
            .then((value)=>{
                if(value.length){
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
            postData("/todos",{
                user:userName,
                todos:[]
            })
        }
            if(localStorage.getItem("userName")){
                history.push("/learn/user")       //if username is present in local storage , it will re redirect to the user page 
            }
                
            
   
    return (
        <div className="container">
            <h1>New User</h1>
            <form style={{
                    display:"flex",
                    gridTemplateColumn:"auto auto",
                    justifyContent:"center",
                    position:"relative",

             }}
             onSubmit={CreateNewUser}
             >
            
               
            <input type="text"
            value={userName}
            onChange={(e)=>{
                setNewUserName(e.target.value)
            }}
            />
            <button type="submit">Add User</button>
            </form>
            {errorTextVisibility && <div className="error-text"> 
            
                Username Already Exist</div>}
                <div className="link-section">
                    Already A User?
                    <Link to="/learn/login"> Click Here</Link>
                </div>
        </div>
    )
}

export default CreateUser
