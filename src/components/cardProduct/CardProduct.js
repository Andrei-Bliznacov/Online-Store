import React from 'react';
import { Link } from 'react-router-dom';
import electronics from "../images/electronics.jpg";
import jewelery from "../images/jewelery.jpg";
import mens from "../images/mens-clothing.jpg";
import womens from "../images/womens-clothing.png";
import noImage from "../images/NoImage.jpg";
import "./cardProduct.css";

const cardImages = [
  {
    name: "electronics",
    logo: electronics
  },
  {
    name: "jewelery",
    logo: jewelery
  },
  {
    name: "men's clothing",
    logo: mens
  },
  {
    name: "women's clothing",
    logo: womens
  }

]

function CardProduct({ category }) {

  const logoCategory = cardImages.find(item => item.name == category)
  const image =  logoCategory ? logoCategory.logo : noImage
  return (
    <div className='categoryBlock'>
      <img src={image}/>
      <Link to={`/product/${category}`}>{category}</Link>
    </div>
  )
}

export default CardProduct