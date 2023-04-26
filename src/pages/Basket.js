import React from 'react'
import { BasketTeamplate } from '../components/basket/BasketTeamplate'

export const Basket = () => {

    const trasformObj = JSON.parse(localStorage.getItem('products'));
    const basketEnd = trasformObj ? trasformObj.map((e, i) => {
        return <BasketTeamplate key={i} title={e.title} image={e.image} price={e.price} />
    }) : [];

    const allPrice = trasformObj.reduce((accumulator, currentValue) => accumulator + currentValue.price
        , 0
    );
    return (
        <>
            <div className='jh'>{basketEnd}</div>
            <div>
                <p>allPrice {allPrice.toFixed(2)}$</p>
            </div>
        </>
    )
}
