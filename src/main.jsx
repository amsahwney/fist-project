import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// import Homepage from './Components/Homepage.jsx'
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
        // i think this needs to be header unless im mistaken 
        // we dont need the homepage component at all as App is functioning as the homepage, -jt
        // I agree with this! so can we delete the homepage component file? -amrita!
      },
      {
        path: "emotions/:name",
        element: <Emotions /> 
// amrita to ask chett for clarification on how useParams works. if I do :id I still get an emotion name. Why? 
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
