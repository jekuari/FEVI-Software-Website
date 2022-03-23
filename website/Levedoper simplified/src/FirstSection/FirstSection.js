import React, { Component } from 'react';
import './FirstSection.css';

import { default as PersonalCard } from './PersonalCard/PersonalCard';
import image1 from './PersonalCard/Resources/ricardo-fevi.webp';
import image2 from './PersonalCard/Resources/andres-fevi.webp';

import backgroundVideo from './Resources/background.mp4';

export default class FirstSection extends Component {
  render() {
    return (
     <div id="FirstSection">
       <div id="FirstSectionVideoContainer">
        <video autoPlay loop muted id="backgroundVideo">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
       </div>
      <div id="FirstSectionOverlay">
        <PersonalCard image={image1} devName="Ricardo Feregrino" devAge="21 AÑOS" devRole="FULLSTACK " alignment="left" isMobile={this.props.isMobile} />
        <PersonalCard image={image2} devName="Andr&eacute;s Villarreal" devAge="19 AÑOS" devRole="BACKEND " alignment="right" isMobile={this.props.isMobile} />
      </div>
     </div>
    )
  }
}
