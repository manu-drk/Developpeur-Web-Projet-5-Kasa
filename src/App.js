import React from "react";
import { Routes, Route } from 'react-router-dom';
import Apropos from "./views/apropos/Apropos";
import Home from "./views/home/Home";
import Error from "./views/Error/Error";
import Logements from "./views/logements/Logements";
import './App.scss';


function App() {
	return (
    
    <div>  
      <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logements/:id" element={<Logements />} />        
        <Route path="*" element={<Error />} />
      </Routes>
    
    </div>
  );
};

export default App;


