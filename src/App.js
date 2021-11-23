import Home from './Home'
import Login from './Login'
import CreateUser from './CreateUser'
import Rough from "./Rough"


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Learn from "./Learn";
import Async from './JS/Async';


const App = () => {
  return (
   <Router>
     <Switch>
     <Route path="/JS/async" component={Async}></Route>
       <Route path="/rough" component={Rough}></Route>
      <Route path="/learn/user" component={Learn}/>
      <Route path="/learn/login" component={Login}></Route>
      <Route path="/learn" component={CreateUser}></Route>
       <Route path="/" component={Home}/>
       
    </Switch>
   </Router>
  )
}

export default App
