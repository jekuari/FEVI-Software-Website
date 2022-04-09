import React, { useState, useEffect } from 'react';
import './SixthSection.css';

import instagramLogo from '../Resources/instagramLogo.svg';
import whatsappLogo from '../Resources/whatsappLogo.svg';

export default function SixthSection() {
     const handleClick = ({target}) => {
          let linkToOpen = '';
          switch(target.id) {
               case 'footerInstagramButton':
                    linkToOpen = 'https://www.instagram.com/fevi_software/';
               break;
               case 'footerWhatsappButton':
                    linkToOpen = 'https://api.whatsapp.com/send?phone=524427212877&text=Hola!%20Quisiera%20informes';
               break;
               default:
                    linkToOpen = 'https://levedoper.com';
               break;
          }
          window.open(linkToOpen);
     };
  return (
    <div id="SixthSection">
         <h1>FEVI Software</h1>
         <div className='SixthSectionSocials'>
               <img src={instagramLogo} alt="Visita nuestro instagram" onClick={handleClick} id="footerInstagramButton"/>
               <img src={whatsappLogo} alt="Escribenos por whatsapp" onClick={handleClick} id="footerWhatsappButton"/>
         </div>
    </div>
  )
}
