import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from '../layouts/Layout.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import NotFound from '../pages/NotFound.jsx';


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/" ,
                element:<Home />
            },
            {
                path:"/login" ,
                element:<Login />
            },
            {
                path:"/register" ,
                element:<Register />
            },
            {
                path:"/dashboard" ,
                element:<Dashboard />
            },
            {
                path:"*" ,
                element:<NotFound />
            },
        ]
    },
    
])