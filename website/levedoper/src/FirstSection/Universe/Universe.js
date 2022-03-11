import React, { Component } from 'react';
import './Universe.css';

import { default as CubeGenerator } from './CubeGenerator/CubeGenerator';

export default class Universe extends Component {
  render() {
    return (
      <div id="Universe">
          <CubeGenerator id="Earth" faceSize="10" faceColors={['RGB(89, 240, 129)', 'RGB(68, 201, 104)', 'RGB(58, 201, 97)', 'RGB(42, 199, 85)', 'RGB(109, 199, 134)', 'RGB(61, 120, 77)']} perspective="1200px"/>
          <CubeGenerator id="Mars" faceSize="15" faceColors={['RGB(235, 128, 75)', 'RGB(171, 90, 32)', 'RGB(179, 99, 59)', 'RGB(176, 86, 40)', 'RGB(171, 66, 12)', 'RGB(99, 37, 5)']} perspective="1200px"/>
          <CubeGenerator id="Sun" faceSize="30" faceColors={['RGB(240, 231, 58)', 'RGB(209, 201, 50)', 'RGB(207, 198, 37)', 'RGB(201, 192, 24)', 'RGB(201, 192, 14)', 'RGB(163, 156, 13)']} perspective="1200px"/>
          <CubeGenerator id="Jupiter" faceSize="7.5" faceColors={['RGB(147, 237, 230)', 'RGB(120, 191, 186)', 'RGB(108, 189, 183)', 'RGB(89, 186, 179)', 'RGB(78, 186, 178)', 'RGB(53, 122, 117)']} perspective="1200px"/>
      </div>
    )
  }
}
