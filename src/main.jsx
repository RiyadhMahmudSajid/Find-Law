import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router/Router.jsx'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router}></RouterProvider>
    <ToastContainer position='top-center' autoClose ={3000} />
  </StrictMode>,
)
