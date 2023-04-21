import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { phones } from '../../api/Api';
import ProductTeamplate from './ProductTeamplate';
import './product.css'

const urlProducts = "https://fakestoreapi.com/products"

function Product() {

  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(urlProducts)
      .then(response => {
        setProduct(response.data)
      })

  }, [])

  const { category } = useParams()
  console.log(product);
  const res = product.filter((e) => e.category == category).map((e, i) => {
    return <ProductTeamplate desc={e.description} img={e.image} price={e.price} title={e.title} key={i} />
  })
  // console.log(res);
  return (
    <div className='resBlock'>{res}</div>
  )
}

export default Product