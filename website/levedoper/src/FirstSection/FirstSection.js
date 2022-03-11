import React, { Component } from 'react';
import './FirstSection.css';

import { default as HexagonGallery } from './HexagonGallery/HexagonGallery'

export default class FirstSection extends Component {
  render() {
    return (
      <div id="FirstSection">
          <h1>FEVI SOFTWARE</h1>
          <HexagonGallery />
      </div>
    )
  }
}
