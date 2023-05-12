import React, { useState } from 'react';
import "./basket.css";
import { androidDelete } from 'react-icons-kit/ionicons/androidDelete';
import { androidArrowDropup } from 'react-icons-kit/ionicons/androidArrowDropup';
import { androidArrowDropdown } from 'react-icons-kit/ionicons/androidArrowDropdown';
import { Icon } from 'react-icons-kit';

export const BasketTeamplate = ({ title, image, price, id }) => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('products')));
    const [product, setProduct] = useState(JSON.parse(localStorage.getItem('products')));


    function saveBasket() {
        window.location.reload(false)
        setData((data) => {
            return data.filter(storedProducts => storedProducts.title !== title)
        })
    }

    localStorage.setItem("products", JSON.stringify(data))


    const [count, setCount] = useState(1);
    let incrementCount = () => {
        setCount(count + 1);
        setProduct((getId) => getId.map(e => e.id == id ? { ...e, price: count * price } : e))
        // window.location.reload(false)
    };
    let decrementCount = () => {
        setCount(count - 1);
        
    };

    localStorage.setItem("products", JSON.stringify(product))

    const sumPrice = count * price
    console.log(data);



    return (
        <>
            <div>
                <h2>{title}</h2>
                <img src={image} />
                <p>{sumPrice}$</p>
                <button className='btnBasket' onClick={() => saveBasket(id)}><Icon icon={androidDelete} />Remove </button>
                {/* <Count/> */}
                <div className='count'>
                    <button className='countButton' onClick={decrementCount} >
                        <Icon icon={androidArrowDropdown} />
                    </button>
                    <div className='countBox'>
                        <span>{count}</span>
                    </div>
                    <button className='countButton' onClick={incrementCount} >
                        <Icon icon={androidArrowDropup} />
                    </button>
                </div>
            </div>

        </>
    )
}
export default BasketTeamplate