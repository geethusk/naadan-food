import React from 'react'

const EditScreen = ({setEditScreenVisibility}) => {
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
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div className="input-fields">
                    <label>price</label>
                    <input type="number" />
                </div>
                <div className="input-fields">
                    <label>description</label>
                    <textarea/>
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
