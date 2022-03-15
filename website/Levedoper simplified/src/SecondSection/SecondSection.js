import React, { Component } from 'react';
import './SecondSection.css';

import waves from './waves.svg';

import image1 from './resources/axesorios.webp';
import image2 from './resources/alizauniformes.webp';

export default class SecondSection extends Component {
  render() {
    return (
      <div id="SecondSectionContainer">
          <div id="SecondSectionCurves">
          <img src={waves} alt=""/>
          </div>
          <div id="SecondSection">
               <h2>PORTAFOLIO</h2>
               <div id="SecondSectionContent">
                 <div>
                  
                  <img alt="P&aacute;gina de axesorios" src={image1}></img>
                  <h4><strong>Axesorios</strong>, p&aacute;gina elaborada con React.js</h4>
                 </div>
                 <div>
                  
                  <img alt="P&aacute;gina de Aliza Uniformes" src={image2}></img>
                  <h4><strong>Aliza</strong>, p&aacute;gina elaborada con HTML, CSS y JS.</h4>
                 </div>
               </div>
               
          </div>
      </div>
    )
  }
}
