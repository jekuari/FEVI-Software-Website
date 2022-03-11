import React, { Component } from 'react';
import './NavSection.css';

export default class NavSection extends Component {
  render() {
    return (
      <div id="NavSection">
          <div id="NavSectionLeft">
                LOGO
          </div>
          <div id="NavSectionRight">
                <button>SERVICIOS</button>
                <button>EXPERIENCIA</button>
                <button>METODOLOG&Iacute;A</button>
                <button>NOSOTROS</button>
          </div>
      </div>
    )
  }
}
