import React, { useState, useEffect } from 'react';

import './MobileNavBar.css';

import MenuIcon from '../../Resources/MenuIcon.svg';

export default function MobileNavBar(props) {
  return (
    <div id="MobileNavBar">
      <img src={MenuIcon} alt="Boton para abrir el menu de exporacion" onClick={props.onClick}/>
    </div>
  )
}
