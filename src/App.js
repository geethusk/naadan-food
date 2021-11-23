import Home from './Home'
import Login from './Login'
import CreateUser from './CreateUser'
import Rough from "./Rough"
import Sample from './JS/Sample';


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Learn from "./Learn";
import Async from './JS/Async';
import Grid from './CSS/Grid';



const App = () => {
  return (
   <Router>
     <Switch>
       <Route path="/CSS/grid" component={Grid}/>
       <Route path="/JS/sample" component={Sample}/>
     <Route path="/JS/async" component={Async}/>
       <Route path="/rough" component={Rough}/>
      <Route path="/learn/user" component={Learn}/>
      <Route path="/learn/login" component={Login}/>
      <Route path="/learn" component={CreateUser}/>
       <Route path="/" component={Home}/>
       
    </Switch>
   </Router>
  )
}

export default App
