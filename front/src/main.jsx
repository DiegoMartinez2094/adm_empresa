import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './componentes/paginaPrincipal/home.jsx'
import Login from './componentes/login/login.jsx'
import CrearCuenta from './componentes/crearCuentaLogin/crearCuenta.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/crearCuenta',
    element: <CrearCuenta/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
)
