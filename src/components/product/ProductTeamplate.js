import React from 'react'
import "./productTeamplate.css"

function ProductTeamplate({desc,img,price,title}) {
  return (
    <div className='blockProduct'>
      <h2>{title}</h2>
      <img src={img}/>
      <h3>{price}$</h3>
        <p>{desc}</p>
    </div>
  )
}

export default ProductTeamplate