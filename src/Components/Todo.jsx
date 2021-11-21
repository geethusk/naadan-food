import React from 'react'
import { useState } from 'react';
import postData from '../postData';

const Todo = ({
    status,
    text,
    i,
    setToDoList,
    toDoList,
    isEditMode,
    user,
 })=>{
    const [editText,setEditText]=useState(text);
    const [errorTextVisibility,setErrorTextVisibility]=useState(false);
    const [duplicateError,setDuplicateError]=useState(false);
     return (  
              
              <li>
                        <div className={`status-circle ${status ? "status-circle--active" : ""}`}
                            onClick={()=>{
                                postData("/todos",{
                                    user,
                                    todos:[
                                        ...toDoList.map(({text,status},index)=>{
                                            if(i===index){
                                                return{
                                                    text,
                                                    status:!status
                                                }
                                            }
                                            return{
                                                text,
                                                status
                                            }
                                           
                                        })
                                    ]
                                       
                                }); 
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
                            {duplicateError && <div className="todo-error-text">
                          pardon....!!Already Exist
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
                            postData("/todos",{
                                user,
                                todos:[
                                    ...toDoList.map(({text,status},index)=>{
                                        if(i===index){
                                            return{
                                                text:editText,
                                                status
                                            }
                                        }
                                        return{
                                            text,
                                            status
                                        }
                                       
                                    })
                                ]
                                   
                            }); 
                            if(text!==editText && toDoList.filter(({text})=>text.toLowerCase()===editText.toLowerCase()).length){
                                setDuplicateError(true);
                                setTimeout(()=>{
                                    setDuplicateError(false);
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
                                if(toDoList.filter(({isEditMode})=>isEditMode).length)return ;
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
                                postData("/todos",{
                                    user,
                                    todos:toDoList.filter((_value, index) => i !== index)
                                       
                                });
                                setToDoList(toDoList.filter((_value, index) => i !== index
                                ));
                            } } />
                            
                    </li>
    )
}

export default Todo
