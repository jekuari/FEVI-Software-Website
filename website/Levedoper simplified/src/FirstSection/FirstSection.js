import React from 'react';

import './FirstSection.css';

import logo from '../Resources/logoWhite.svg';

export default function FirstSection() {
  return (
    <div id="FirstSection">
      <div id="FirstSectionContainer">
        <img src={logo} alt=""/>
        <h3>DESARROLLO WEB DE VANGUARDIA</h3>
      </div>
    </div>
  )
}
