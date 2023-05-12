import React from 'react';
import "./productTeamplate.css";
import {androidCart} from 'react-icons-kit/ionicons/androidCart';
import  { Icon } from 'react-icons-kit';



function ProductTeamplate({ desc, img, price, title }) {

  const sendProduct =()=> {
    const storedProducts = JSON.parse(localStorage.getItem('products'))
    const allProducts = storedProducts ? storedProducts : [];
    const objProduct ={
      title: title,
      image: img,
      price: price,
      count: 1
    }
    allProducts.push(objProduct)
    localStorage.setItem('products',JSON.stringify(allProducts))
    // console.log(allProducts);

  }
  return (
    <div className='blockProduct'>
      <h2>{title}</h2>
      <img src={img} />
      <p>{desc}</p>
      <h3>${price}</h3>
      <button className='btn' onClick={sendProduct}> <Icon icon={androidCart}/><span>Add to Basket</span></button>
    </div>
  )
}

export default ProductTeamplate