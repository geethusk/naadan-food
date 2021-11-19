import Home from './Home'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Learn from "./Learn";


const App = () => {
  return (
   <Router>
     <Switch>
      <Route path="/learn" component={Learn}/>
       <Route path="/" component={Home}/>
       
    </Switch>
   </Router>
  )
}

export default App
