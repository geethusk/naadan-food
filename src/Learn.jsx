import React from 'react'
import {useState}  from 'react';
import './index.css'


const Learn = () => {
    const [toDoList, setToDoList ] = useState([]);
    const [toDo, setToDo] = useState("");
        const addToDoList=()=>{
            setToDoList(prev=>[...prev,toDo])
            setToDo("")
        }
    return (
        <div>
            <div className="to-do-list">
                <h1>Todo</h1>
                <h3> Hello World! A To Do List Will Go here!</h3>
                <input type="text" value={toDo} placeholder="Type Here..."
                 onChange={(e)=>{
                setToDo(e.target.value)
            }}/>
            <button className="to-do-add" onClick={addToDoList}> 
                done</button>

            <ul id="list">
                {toDoList.map((value,i)=><li key={i}
                onClick={()=>{
                    setToDoList(toDoList.filter((_value,index)=>
                     i!==index
                    ))
                }}
                >{value}</li>)}
                </ul>
            </div>
          

        </div>
    )
}

export default Learn
