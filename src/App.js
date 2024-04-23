import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import A-propos from "./pages/a-propos/A-propos";
import Home from "./pages/home/Home";
import Logements from "./pages/logements/Logements";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
