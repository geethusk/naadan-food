import {useState} from 'react'

const AppComponent = () => {
    const[count,setCount]=useState(0); 
    return (
        <>
        <div 
      className="count_button"
      onClick={
        ()=>{
          setCount(count-1);
        }
      }
      >
        -
      </div>
      <div className="count_value">
        {count}
      </div>

      <div 
      className="count_button"
      onClick={
        ()=>{
          setCount(count+1);
        }
      }
      >
        +
      </div>
        </>
    )
}

export default AppComponent
