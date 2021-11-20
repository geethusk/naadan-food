import React from 'react'
import {useState}  from 'react';
import './index.css'
import Todo from "./Components/Todo"


const Learn = () => {
    const [toDoList, setToDoList ] = useState([]);
    const [toDo, setToDo] = useState("");
    // const [editField,setEditField]=useState();
    const addToDoList=()=>{
        if(!toDo)return 
        setToDoList(prev=>[...prev,{text:toDo,status:false,isEditMode:false}])     
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
                    {toDoList.map((data,i)=>
                    <Todo
                    {...data}
                    key={i}
                    i={i}
                    setToDoList={setToDoList}
                    toDoList={toDoList}

                  />
                    )}



              </ul>
            </div>
          

        </div>
    )
}

export default Learn