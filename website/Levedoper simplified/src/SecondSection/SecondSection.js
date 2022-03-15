import React, { Component } from 'react';
import './SecondSection.css';

import waves from './waves.svg';

export default class SecondSection extends Component {
  render() {
    return (
      <div id="SecondSectionContainer">
          <div id="SecondSectionCurves">
          <img src={waves} alt=""/>
          </div>
          <div id="SecondSection">
                <p>text</p>
          </div>
      </div>
    )
  }
}
