import React from 'react'
import { Link } from 'react-router-dom'

function CardProduct({category}) {
  return (
    <div>
        <Link to={`/product/${category}`}>{category}</Link>
    </div>
  )
}

export default CardProduct