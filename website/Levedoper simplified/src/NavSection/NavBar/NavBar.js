import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div id="NavBar">
          <ul>
              <li><input type="button" value="DESARROLLO" /></li>
              <li><input type="button" value="CONTACTO" /></li>
              <li><input type="button" value="NOSOTROS" /></li>
              <li><input type="button" value="PROYECTOS" /></li>
          </ul>
      </div>
    )
  }
}
