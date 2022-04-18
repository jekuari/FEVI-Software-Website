import React from 'react';

import './MobileMenu.css';

export default function MobileMenu(props) {
  const handleOnClick = ({target}) => {
    props.hideMenu();
    const value = target.value;
    switch (value) {
      case 'DESARROLLO': 
        document.getElementById('SecondSectionContainer').scrollIntoView();
      break;
      case 'CONTACTO': 
       document.getElementById('ThirdSection').scrollIntoView();
      break;
      case 'NOSOTROS': 
        document.getElementById('fourthSectionContainer').scrollIntoView();
      break;
      case 'SERVICIOS':
        document.getElementById('FifthSection').scrollIntoView();
      break;
      default:
        console.log('out of bounds');
      break;
    }
  }
  return (
    <div id="MobileMenu" style={props.isMenuOpen ? {transform: 'translateY(-150%)'} : {transform: 'translateY(0%)'}}>
         <ul>
              <li><input type="button" value="DESARROLLO" onClick={handleOnClick} /></li>
              <li><input type="button" value="CONTACTO" onClick={handleOnClick} /></li>
              <li><input type="button" value="NOSOTROS" onClick={handleOnClick} /></li>
              <li><input type="button" value="SERVICIOS" onClick={handleOnClick} /></li>
          </ul>
    </div>
  )
}
