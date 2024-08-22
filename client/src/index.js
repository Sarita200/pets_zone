import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './views/Home/Home';
import Blog from '../src/views/Blog/Blog';



const router= createBrowserRouter ([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/blog",
    element:<Blog/>
  },
  {
    path:"*",
    element:`404 Not Found`
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

