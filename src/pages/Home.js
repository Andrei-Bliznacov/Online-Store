import './home.css';
import React, { useEffect, useState } from 'react';
import CardProduct from '../components/cardProduct/CardProduct';
import axios from 'axios';

const urlProduct = 'https://fakestoreapi.com/products/categories';

function Home() {
  const [categoris, setCategoris] = useState([]);
  useEffect(() => {
    axios.get(urlProduct)
      .then(response => {
        setCategoris(response.data)
      })

  },[])
  // console.log(categoris);
  const dataCategoris = categoris.map((e, i) => {
    return (
      <CardProduct key={i} category={e} />
    )
    
  })
  return (
    <div className='cardsBlock'>
      {dataCategoris}
    </div>
  )
}

export default Home