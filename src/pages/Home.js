

import React, { useEffect, useState } from 'react'
import { phones } from '../api/Api'
import CardProduct from '../components/cardProduct/CardProduct'
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
    <div>
      {dataCategoris}
    </div>
  )
}

export default Home