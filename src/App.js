import React from "react";
import { Router, Routes, Route } from 'react-router-dom'
import Apropos from "./pages/apropos/Apropos";
import Home from "./pages/home/Home";
import Error from "./pages/Error/Error";
import Logements from "./pages/logements/Logements";
import './App.css';
import logo from './logo.svg'

function App() {
	return (
    <div className="App">
      <img scr={logo}/>
    <Router>
      <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
