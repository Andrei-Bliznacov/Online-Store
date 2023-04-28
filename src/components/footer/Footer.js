import React from 'react';
import {socialTwitter} from 'react-icons-kit/ionicons/socialTwitter';
import {socialFacebook} from 'react-icons-kit/ionicons/socialFacebook';
import {socialInstagram} from 'react-icons-kit/ionicons/socialInstagram';
import  { Icon } from 'react-icons-kit';
import "./footer.css";

function Footer() {
  return (
    <div className='footerBlock'>
      <div><h2>Social Network</h2></div>
      <div>
      <a href=""> <Icon icon={socialTwitter}/></a>
      <a href=""> <Icon icon={socialFacebook}/></a>
      <a href=""> <Icon icon={socialInstagram}/></a>
      </div>
    </div>
  )
}

export default Footer
