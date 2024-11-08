import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const routes = [
  {
    path: "/", 
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "emotions/:id",
        element: <Emotions /> 
      },
      { 
        path: "feedback",
        element: <Feedback />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render( <RouterProvider router={router}/> )
