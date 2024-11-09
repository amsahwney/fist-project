import React from 'react'
import { Link } from "react-router-dom"
import './navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/feedback">Feedback</Link>
    </div>
  )
}

export default Navbar