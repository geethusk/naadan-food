import React from 'react'
import {useState} from "react"
import postData from './postData'


const CreateUser = ({history}) => {
    const [userName,setNewUserName]=useState("");
    const CreateNewUser=(e)=>{
            e.preventDefault();
            postData("/todos",{
                user:userName,
                todos:[]
            })
            .then(result=>{
                if(result){
                    history.push(`/learn/${userName}`)
                }
                    
            })
                
            
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
        </div>
    )
}

export default CreateUser
