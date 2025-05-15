import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home/Home.jsx'

import './index.css'
import App from './App.jsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: 'error',
    children: [
      {
        path: "/",
        element: <Home />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
