import React, { Component } from 'react';
import './NavSection.css';


import { default as NavBar } from './NavBar/NavBar'
export default class NavSection extends Component {
  render() {
    return (
      <div id="NavSection">
          <div id="NavSectionLeft">
            <h1>FEVI</h1>
          </div>
          <div id="NavSectionRight">
            {this.props.isMobile ? null : <NavBar />}
          </div>
      </div>
    )
  }
}
