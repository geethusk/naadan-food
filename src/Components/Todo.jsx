import React from 'react'
import { useState } from 'react';

const Todo = ({
    status,
    text,
    i,
    setToDoList,
    toDoList,
    isEditMode,
 })=>{
    const [editText,setEditText]=useState(text);
    const [errorTextVisibility,setErrorTextVisibility]=useState(false);
     return (  
              
              <li>
                        <div className={`status-circle ${status ? "status-circle--active" : ""}`}
                            onClick={()=>{
                                setToDoList(prev => {
                                let newTodoList = [...prev];
                                let newTodo = { ...newTodoList[i] };
                                newTodo.status = !newTodo.status;
                                newTodoList[i] = newTodo;
                                return newTodoList;
                                })
                            }}
                        />

                        {isEditMode?
                        <>
                        <div className="todo-edit-text-container">
                        <input type="text"
                         className="todo-edit-text-field"
                        value={editText}
                        onChange={(e)=>{
                            setEditText(e.target.value);
                        }}
                        />
                        <div className="todo-edit-cancel-button"
                                onClick={()=>{
                                    setToDoList(prev => {
                                        let newTodoList = [...prev];
                                        let newTodo = { ...newTodoList[i] };
                                        newTodo.isEditMode =false; 
                                        newTodoList[i] = newTodo;
                                        return newTodoList;
                                })
                                setEditText(text);
                            }}
                        />
                        {errorTextVisibility && <div className="todo-error-text">
                            Oops....!!Enter Something
                            </div>}
                        </div>
                        <div className="todo-edit-save-button"
                           onClick={
                            ()=>{
                            if(!editText){
                                setErrorTextVisibility(true)
                            setTimeout(()=>{
                                setErrorTextVisibility(false)
                            },1500)
                            return
                            }  
                            setToDoList(
                                prev =>{
                                let newTodoList = [...prev];
                                let newTodo = { ...newTodoList[i] };
                                newTodo.isEditMode =false; 
                                newTodo.text=editText;
                                newTodoList[i] = newTodo;
                                return newTodoList;
                        })
                    }  }
                        />
                        </>
                        :
                        <>
                        <div className="todo-text">
                        {text}
                        </div>
                      <div className="todo-edit-button"
                            onClick={()=>{
                                setToDoList(prev => {
                                    let newTodoList = [...prev];
                                    let newTodo = { ...newTodoList[i] };
                                    newTodo.isEditMode = true;
                                    newTodoList[i] = newTodo;
                                    return newTodoList;
                            })
                        }}
                      />     
                         </>}
                        <div className="to-do-close-button"
                            onClick={() => {
                                setToDoList(toDoList.filter((_value, index) => i !== index
                                ));
                            } } />
                            
                    </li>
    )
}

export default Todo
