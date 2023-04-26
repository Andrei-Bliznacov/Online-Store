import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/basket">Basket</Link>
    </div>
  )
}

export default Navigation