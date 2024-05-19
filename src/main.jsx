import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className='  mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    </div>
    </AuthProvider>
  </React.StrictMode>,
)
