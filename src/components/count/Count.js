import React from 'react';
import { androidArrowDropup } from 'react-icons-kit/ionicons/androidArrowDropup';
import { androidArrowDropdown } from 'react-icons-kit/ionicons/androidArrowDropdown';
import { Icon } from 'react-icons-kit';
import { useState } from 'react';

function Count() {

    const [count, setCount] = useState(1);
    let incrementCount = () => {
        setCount(count + 1);
    };
    let decrementCount = () => {
        setCount(count - 1);
    };

    const dataPrice = (JSON.parse(localStorage.getItem('products')))

    const finalPrice = dataPrice.map((e,i) => {
        let priceSum = e.price*count
        return priceSum
    })
    
    return (
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
    )
}

export default Count