
import './App.css';
import ProductComponent from './ProductComponent';
import AppComponent from './AppComponent';


import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App=()=> {
  return (
     <div className="App">  
     <Router>
       <Routes>
         <Route path="/multi" element={<ProductComponent/> } />
         { <Route path="/" element={<AppComponent/> } />   /*home page */}
         </Routes>
      </Router> 
      </div>
  );
}



export default App;
