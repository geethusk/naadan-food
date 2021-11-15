
import './App.css';
import ProductComponent from './ProductComponent';
import AppComponent from './AppComponent';


import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const App=()=> {
  return (
     <div className="App">  
     <Router>
       <Switch>
         <Route path="/multi" component={ProductComponent} />
         { <Route path="/" component={AppComponent } />   /*home page */}
         </Switch>
      </Router> 
      </div>
  );
}



export default App;
