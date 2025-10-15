import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

let approute = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={approute}>
  <App/>
</RouterProvider>
)
