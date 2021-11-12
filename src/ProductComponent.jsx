import { useState } from 'react';

const ProductComponent = () => {  
    const[counter,setCounter]=useState(1); 
    return (
        <>
            <div 
      className="count_button"
      onClick={
        ()=>{
          setCounter(counter/2);
        }
      }
      >
        /
      </div>
      <div className="count_value">
        {counter}
      </div>

      <div 
      className="count_button"
      onClick={
        ()=>{
          setCounter(counter*2);
        }
      }
      >
        *
      </div>
        </>
    )
}

export default ProductComponent
