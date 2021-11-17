import React from 'react'
import { useState } from 'react';

const EditScreen = ({setEditScreenVisibility,editFoodIndex,foodList}) => {
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
    return (
        <div className="over-view-screen">
         <div className="edit-food-card-container">
             <div 
                className="food-card-close-button" 
                onClick={()=>{
                    setEditScreenVisibility(false)
                    }
                }          
            />
                <h2>Edit</h2>
            <form>
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
