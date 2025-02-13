import React from 'react'
import { Link } from "react-router-dom"
import './NavBar.css'

function Navbar() {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/feedback">feedback</Link>
    </nav>
    // <div className="navbar">
    //   <Link to="/">Home</Link>
    //   <Link to="/feedback">Feedback</Link>
    // </div>
  )
}

export default Navbar