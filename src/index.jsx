import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Importez BrowserRouter
import App from './App';
import './index.css';

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,
document.getElementById('root')
);






// import React from 'react';
// // import ReactDOM from 'react-dom/client';
// import { createRoot } from "react-dom/client";
// import { RouterProvider,createBrowserRouter } from 'react-router-dom'
// // import ReactDOM from 'react-dom/client';
// // import App from './App';
// import './index.css';
// import Apropos from "./pages/apropos/Apropos";
// import Home from "./pages/home/Home.js";
// import Error from "./pages/Error/Error";
// import Logements from "./pages/logements/Logements";
// import './App.css';
// // import logo from './logo.svg'



// const router = createBrowserRouter([
// {
//     path: "/",
//     element: <Home ok="ok" />,
// },
// {
//     path: "/apropos",
//     element: <Apropos />
// },
// {
//     path: "/logements/:id",
//     element: <Logements />
// },
// {
//     path: "*",
//     element: <Error />
// },
// ]);





// createRoot(document.getElementById("root")).render(
// <RouterProvider router={router} />
// );




















// // import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// 	<BrowserRouter>
// 		<App />
// 	</BrowserRouter>
// );