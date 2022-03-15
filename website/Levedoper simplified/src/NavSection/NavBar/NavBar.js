import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div id="NavBar">
          <ul>
              <li><button>PORTAFOLIO</button></li>
              <li><button>CONTACTO</button></li>
              <li><button>NOSOTROS</button></li>
              <li><button>PROYECTOS</button></li>
          </ul>
      </div>
    )
  }
}
