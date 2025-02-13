import './App.css'
import Navbar from './Components/Navbar'
import { Outlet, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/feedback">Feedback</Link>
      </Navbar>

      
      <Outlet />

      <footer> created by Amrita, Joyce, and Justin &lt;3 </footer>

    </div>
  )
}

export default App
