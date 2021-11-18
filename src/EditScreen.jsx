import React from 'react'
import { useState } from 'react';

const EditScreen = ({setEditScreenVisibility,editFoodIndex,foodList,setFoodList,addForm}) => {
    const [editFoodForm,setEditFoodForm ]=useState(foodList[editFoodIndex]);
    const {title,price,description}=editFoodForm;
    const onChange=(value,key)=>{
        setEditFoodForm(prev=>{
            return{
                ...prev,
                [key]:value
            }
        })
    }
        const editFoodSave=(e)=>{
            e.preventDefault();
            setFoodList(prev=>{
                let newList=[...prev];
                newList[editFoodIndex]=editFoodForm;
                return newList;
            })
            setEditScreenVisibility(false);
        }
    
    return (
        <div className="over-view-screen">
         <div className="edit-food-card-container">
             <div 
                className="food-card-close-button" 
                onClick={()=>{
                    if(addForm==="Add New"){
                        setFoodList(foodList.filter((_value,i)=> editFoodIndex!==i))

                }
                setEditScreenVisibility(false)
            }
        } />
                <h2>{addForm}</h2>

            <form onSubmit={editFoodSave}>
                <div className="input-fields">
                    <label>Name:</label>
                    <input type="text" value={title}
                    onChange={
                        (e)=>{
                         onChange(e.target.value,"title")
                            } 
                        } 
                    />
                </div>
                <div className="input-fields">
                    <label>price(₹):</label>
                    <input type="number" value={price}
                        onChange={
                                (e)=>{
                                 onChange(e.target.value,"price")
                                    } 
                                }
                    />
                </div>
                <div className="input-fields">
                    <label>description:</label>
                    <textarea placeholder="typing in here now..." value={description}
                        onChange={
                            (e)=>{
                             onChange(e.target.value,"description")
                                } 
                            }
                    />
                </div>
                <div className="submit-section">
                    <button type="submit">save</button>
                </div>
            </form>
         </div>
        </div>
    )
}

export default EditScreen
