import React, { Component } from 'react';
import './Universe.css';

import { default as CubeGenerator } from './CubeGenerator/CubeGenerator';

export default class Universe extends Component {
  render() {
    return (
      <div id="Universe">
          <CubeGenerator id="Earth" faceSize="50"/>
      </div>
    )
  }
}
