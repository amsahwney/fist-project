import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Feedback from './components/Feedback'
import Homepage from './components/Homepage'
import { Outlet, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/feedback">Feedback</Link>
      </Navbar>

      {/* i dont think we need the below routes cause we routed everything with main js */}
      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes> */}

      
      {/* Feedback page isnt working properly, homepage displays are also in feedbackpage */}
   
      {/* The dogs are showing up way to big and the hovering for the emotions isnt working properly right now. */}
    
      {/* TESTTEST Delete Header when we route properly and put navbar and outlet back */}
      
      <Outlet />

      <footer> created by Amrita, Joyce, and Justin - add a heart here </footer>

    </div>
  )
}

export default App
