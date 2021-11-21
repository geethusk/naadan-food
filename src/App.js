import Home from './Home'
import CreateUser from './CreateUser';

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
      <Route path="/learn/:user" component={Learn}/>
      <Route path="/learn" component={CreateUser}></Route>
       <Route path="/" component={Home}/>
       
    </Switch>
   </Router>
  )
}

export default App
