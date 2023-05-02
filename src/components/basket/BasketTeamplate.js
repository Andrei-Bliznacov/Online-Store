import React, { useState } from 'react';
import "./basket.css";
import { androidDelete } from 'react-icons-kit/ionicons/androidDelete';
import { Icon } from 'react-icons-kit';

export const BasketTeamplate = ({ title, image, price, id }) => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('products')));


    function saveBasket() {
        window.location.reload(false)
        setData((data) => {
            return data.filter(storedProducts => storedProducts.title !== title)
        })
    }

    localStorage.setItem("products", JSON.stringify(data))

    return (
        <>
            <div>
                <h2>{title}</h2>
                <img src={image} />
                <p>{price}$</p>
                <button className='btnBasket' onClick={() => saveBasket(id)}><Icon icon={androidDelete} />Remove </button>
            </div>
        </>
    )
}
