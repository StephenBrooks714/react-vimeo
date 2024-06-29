import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-bootstrap/dist/react-bootstrap.min.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "dotenv";
import Login from "./auth/Login.jsx";
// mongoose

// pages
import ErrorPage from "./error-page";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login/>,
        errorElement: <ErrorPage />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
