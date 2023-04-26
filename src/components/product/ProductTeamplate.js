import React from 'react'
import "./productTeamplate.css"



function ProductTeamplate({ desc, img, price, title }) {

  const sendProduct =()=> {
    const storedProducts = JSON.parse(localStorage.getItem('products'))
    const allProducts = storedProducts ? storedProducts : [];
    const objProduct ={
      title: title,
      image: img,
      price: price
    }
    allProducts.push(objProduct)
    localStorage.setItem('products',JSON.stringify(allProducts))
    // console.log(allProducts);

  }
  return (
    <div className='blockProduct'>
      <h2>{title}</h2>
      <img src={img} />
      <h3>{price}$</h3>
      <p>{desc}</p>
      <button onClick={sendProduct}>Add to Basket</button>
    </div>
  )
}

export default ProductTeamplate