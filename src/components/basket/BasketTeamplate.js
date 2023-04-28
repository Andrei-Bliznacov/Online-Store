import React, { useState } from 'react'

export const BasketTeamplate = ({ title, image, price, id }) => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('products')));
    

    function saveBasket() {
        setData((data) =>{
            return data.filter(storedProducts => storedProducts.title !== title)
        }) 
        //  JSON.parse(localStorage.getItem('products'))
        // .filter(storedProducts => storedProducts.title !== title)
        console.log(id);
    }
    console.log(data);
    localStorage.setItem("products", JSON.stringify(data))
    // function removeProduct() {
    //     saveBasket()
       
    // }
    return (
        <>
            <h2>{title}</h2>
            <img src={image} />
            <p>{price}$</p>
            <button onClick={() => saveBasket(id)}>Remove </button>
        </>
    )
}
