import React from 'react'
import {useState,useEffect}  from 'react';
import './index.css'
import Todo from "./Components/Todo"
import postData from "./postData"


const Learn = ({match,history}) => {
    const user=localStorage.getItem("userName");
    const [toDoList, setToDoList ] = useState([]);
    const [toDo, setToDo] = useState("");
    const [duplicateError,setDuplicateError]=useState(false);
useEffect(() => {
         fetch(`http://192.168.1.42:8086/todos/${user}`)

        .then((result)=>result.json())
        .then((value)=>{
            if(!value.length){
                localStorage.removeItem("userName");
                history.push("/learn")
                return
            }
            setToDoList(value[0].todos.map(({text,status})=>{
                return{
                    text,
                    status,
                    isEditMode:false
                }
            }));
        })
},[]);  //empty array passing , if we need to take a particular element change
    
    const addToDoList=()=>{
        if(!toDo)return 
            if(toDoList.filter(({text})=>toDo.toLowerCase()===text.toLowerCase()).length){
                setDuplicateError(true);
                setTimeout(()=>{
                    setDuplicateError(false);
                },1500)
                return
            }
            postData("/todos",{
                user,
                todos:[
                    ...toDoList.map(({text,status})=>{
                        return{
                            text,
                            status
                        }
                    }),
                    {
                        text:toDo,
                        status:false

                    },
                ]
            });
        setToDoList(prev=>[...prev,
            {text:toDo,
            status:false,
            isEditMode:false}
        ])     
        setToDo("")        
    }
    if(!localStorage.getItem("userName")){
        history.push("/learn")
    }
    
    return (
        <div className="container">
            <div className="to-do-list">
                <h1>Todos({user})</h1>
                <div className="input-section">
                <input className="todo-area" type="text" value={toDo} placeholder="Type Here..."
                 onChange={(e)=>{
                setToDo(e.target.value)
            }}/>
            
            <button className="to-do-add" onClick={addToDoList}> 
                ADD</button></div>
                {duplicateError && <div className="duplicate-error">
                          pardon....!!Already Exist
                            </div>}
                
                            <div className="logout-section">
                    <button
                    onClick={()=>{
                        localStorage.removeItem("userName");
                        history.push("/learn/login")
                    }}>Logout</button>
                    
                   
                </div>

              <ul id="list">
                    {toDoList.map((data,i)=>
                    <Todo
                    {...data}
                    key={i}
                    i={i}
                    setToDoList={setToDoList}
                    toDoList={toDoList}
                    user={user}

                  />
                    )}



              </ul>
            </div>
          

        </div>
    )
}

export default Learn