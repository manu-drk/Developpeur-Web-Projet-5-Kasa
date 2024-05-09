import React from "react";
import { Routes, Route } from 'react-router-dom';
import Apropos from "./pages/apropos/Apropos";
import Home from "./pages/home/Home";
import Error from "./pages/Error/Error";
import Logements from "./pages/logements/Logements";
import './App.scss';


function App() {
	return (
    // <div className="App">
    //   <img src={logo} alt='logo-react'/>  
    <div>  
      <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
         <Route path="/logements/:id" element={<Logements />} /> 
        {/* <Route path="/logements/:id/:tagName" element={<Logements />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    
    </div>
  );
};

export default App;


