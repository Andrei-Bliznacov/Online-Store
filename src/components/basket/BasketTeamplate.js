import React from 'react'

export const BasketTeamplate = ({title,image,price}) => {

    function removeProduct (){
        let storedProducts = JSON.parse(localStorage.getItem('products'))
        storedProducts = storedProducts.filter(storedProducts => storedProducts.title !== title);
        localStorage.setItem("products", JSON.stringify(storedProducts))
    //        console.log(storedProducts);
    //        console.log(title);
    }
  return (
    <>
    <h2>{title}</h2>
    <img src={image}/>
    <p>{price}$</p>
    <button onClick={removeProduct}>Remove </button>
    </>
  )
}
