import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './home/Home.jsx'
import './index.css'
import Blog from './blog/Blog.jsx'
import Shop from './shop/Shop.jsx'

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import SingleProduct from './shop/SingleProduct.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";






const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[ 
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/shop/:id",
        element: <SingleProduct/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
