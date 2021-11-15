import { useState } from 'react';
import {Link,useRouteMatch} from 'react-router-dom'


const ProductComponent = () => {  
    const[counter,setCounter]=useState(1); 
    const match = useRouteMatch();
    console.log(match.url);
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
      <Link to="/" >Addition</Link>

        </>
    )
}

export default ProductComponent
