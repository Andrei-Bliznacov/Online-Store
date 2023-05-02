import React from 'react';
import { BasketTeamplate } from '../components/basket/BasketTeamplate';
import "../components/basket/basket.css";
// localStorage.clear()
export const Basket = () => {
    function EmptyBasket() {
        return <h1>Basket Empty</h1>
    }

    const trasformObj = JSON.parse(localStorage.getItem('products'));
    const basketEnd = trasformObj ? trasformObj.map((e, i) => {
        return <BasketTeamplate key={i} title={e.title} image={e.image} price={e.price} />
    }) : <EmptyBasket />;

    let allPrice
    if (trasformObj !== null) {
        allPrice = trasformObj.reduce((accumulator, currentValue) => accumulator + currentValue.price
            , 0
        ).toFixed(2)
    }

    const x = (allPrice == 0) ? <EmptyBasket /> : '';
    return (
        <>
            <div className='basketBlock'>{basketEnd} {x}</div>
            <div>
                <h3 className='allPrice'>All Price: {allPrice}$</h3>
            </div>
        </>
    )
}
