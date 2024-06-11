import React from 'react';
import SocialMedia from './SocialMedia';

function Footer({ dataSelect }) {
  return (
    <div id='footer'>
        <p>{dataSelect.footer}</p>
    </div>
  )
}

export default Footer;