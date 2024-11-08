import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>

      <Navbar /> 

      <Outlet />

      <footer> created by Amrita, Joyce, and Justin - add a heart here </footer>

    </div>
  )
}

export default App
