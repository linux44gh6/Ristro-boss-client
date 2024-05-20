import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className='  mx-auto'>
          <RouterProvider router={router}></RouterProvider>
        </div>
    </QueryClientProvider>
       
      

    </AuthProvider>
  </React.StrictMode>,
)
