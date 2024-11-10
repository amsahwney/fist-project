import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// import Homepage from './Components/Homepage.jsx'
import Feedback from './Components/Feedback.jsx'
import Emotions from './Components/Emotions.jsx'
import Header from './Components/Header.jsx'

const routes = [
  {
    path: "/", 
    element: <App />,
    children: [
      {
        index: true,
        element: <Header/>
        // i think this needs to be header unless im mistaken 
        // we dont need the homepage component at all as App is functioning as the homepage, -jt
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
