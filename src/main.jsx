import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Feedback from './components/Feedback.jsx'
import Emotions from './components/Emotions.jsx'
import Header from './components/Header.jsx'

const routes = [
  {
    path: "/", 
    element: <App />,
    children: [
      {
        index: true,
        element: <Header/>
      },
      {
        path: "emotions/:name",
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
