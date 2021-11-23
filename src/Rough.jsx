import React from 'react'
import { useState } from 'react'
import "./rough.css"

const Rough = () => {
    const [texVisibility,setTextVisibility]=useState("");
    return (
        <div>
            <div className="container">
                <h1>TEXT</h1>
                <input type="text"
                onChange={(e)=>{
                    setTextVisibility(e.target.value);
                }}value={texVisibility}/>
                 <div className="text-container">
                     {texVisibility}
                 </div>
            </div>
        </div>
    )
}

export default Rough
