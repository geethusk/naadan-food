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
        <div className="container">
            <div className="to-do-list">
                <h1>Todos</h1>
                <div className="input-section">
                <input className="todo-area" type="text" value={toDo} placeholder="Type Here..."
                 onChange={(e)=>{
                setToDo(e.target.value)
            }}/>
            <button className="to-do-add" onClick={addToDoList}> 
                ADD</button></div>
            

              <ul id="list">
                    {toDoList.map((value,i)=><li>
                        <div className="status-circle active not-active"
                        onClick={()=>{
                            
                        }}
                        />
                    <div className="todo-text">
                    {value}
                    </div>
                    <div className="to-do-close-button"
                         onClick={()=>{
                            setToDoList(toDoList.filter((_value,index)=>
                            i!==index    
                            ))     
                        }}
                    />
                    </li>)}


              </ul>
            </div>
          

        </div>
    )
}

export default Learn