import {useState} from 'react'
import {Link,useHistory,useRouteMatch,useParams} from 'react-router-dom'

const AppComponent = () => {
    const[count,setCount]=useState(0); 
    const history=useHistory();
    const match = useRouteMatch();
    const current=useParams();
    console.log(current);
    console.log(match.url);
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
      <Link to="/multi" >multiplication</Link>
      <button onClick={
        ()=>{
          history.push("/multi");
        }
      }>multiplication</button>
        </>
    )
}

export default AppComponent
