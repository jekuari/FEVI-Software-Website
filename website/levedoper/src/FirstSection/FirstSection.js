import React, { Component } from 'react';
import './FirstSection.css';

import { default as HexagonGallery } from './HexagonGallery/HexagonGallery';
import { default as Universe } from './Universe/Universe.js';

export default class FirstSection extends Component {
  render() {
    return (
      <div id="FirstSection">
          <h1>FEVI SOFTWARE</h1>
          <HexagonGallery />
          <Universe />
      </div>
    )
  }
}
