import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import logo from "../images/logo.png";
import { Icon } from 'react-icons-kit';
import {basket} from 'react-icons-kit/ikons/basket';
import {androidHome} from 'react-icons-kit/ionicons/androidHome';
import {iosContactOutline} from 'react-icons-kit/ionicons/iosContactOutline';
import {iosPaper} from 'react-icons-kit/ionicons/iosPaper';

function Navigation() {
  return (
    <div className='navBlock'>
      <Link to="/"><img className='loogo' alt='' src={logo} /></Link>
      <Link to="/">Home <Icon className='iconHeader' icon={androidHome} /></Link>
      <Link to="/about">About <Icon className='iconHeader'  icon={iosPaper}/></Link>
      <Link to="/contact">Contact <Icon className='iconHeader'  icon={iosContactOutline}/></Link>
      <Link to="/basket">Basket<Icon className='iconHeader'  icon={basket} /></Link>
    </div>
  )
}

export default Navigation