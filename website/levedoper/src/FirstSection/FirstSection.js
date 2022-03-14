import React, { Component } from 'react';
import './FirstSection.css';

import { default as HexagonGallery } from './HexagonGallery/HexagonGallery';
import { default as Universe } from './Universe/Universe.js';

export default class FirstSection extends Component {
  constructor(props) {
    super(props);
    this.state = ({SelectedSection: 'Pasa tu cursor por encima de un objeto'});
    this.changeSelectedOption = this.changeSelectedOption.bind(this);
  }
  changeSelectedOption(value) {
    switch (value) {
      case 'Conocimientos':
        this.setState({SelectedSection: 'Nuestros conocimientos'});
      break;
      case 'Portafolio':
        this.setState({SelectedSection: 'Portafolio'});
      break;
      default:
        this.setState({SelectedSection: value});
    }
  }
  render() {
    return (
      <div id="FirstSection">
          <h1>FEVI SOFTWARE</h1>
          <div id="FirstSectionInstructions">
            <p>(Navega haciendo click en los objetos)</p>
            <h2 id="SelectedSection">{this.state.SelectedSection}</h2>
          </div>
          <p>Desarrollo web a la vanguardia.</p>
          <HexagonGallery onHover={this.changeSelectedOption}/>
          <div id="portfolioSection"> 
            <Universe onHover={this.changeSelectedOption}/>
            <div id="portfolioSectionShadow"></div>
          </div>
      </div>
    )
  }
}
