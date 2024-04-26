import React from "react";
// import { Router, Routes, Route } from 'react-router-dom'
// import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apropos from "./pages/apropos/Apropos";
import Home from "./pages/home/Home";
import Error from "./pages/Error/Error";
import Logements from "./pages/logements/Logements";
import './App.css';
import logo from './logo.svg';

function App() {
	return (
    <div className="App">
      <img src={logo} alt='logo-react'/>
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;



// import React from 'react';
// import { createRoot } from "react-dom/client";
// import { RouterProvider,createBrowserRouter } from 'react-router-dom'
// // import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import Apropos from "./pages/apropos/Apropos";
// import Home from "./pages/home/Home.js";
// import Error from "./pages/Error/Error";
// import Logements from "./pages/logements/Logements";
// import './App.css';
// import logo from './logo.svg'



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home ok="ok" />,
//   },
//   {
//     path: "/apropos",
//     element: <Apropos />
//   },
//   {
//     path: "/logements/:id",
//     element: <Logements />
//   },
//   {
//     path: "*",
//     element: <Error />
//   },
// ]);





// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );























