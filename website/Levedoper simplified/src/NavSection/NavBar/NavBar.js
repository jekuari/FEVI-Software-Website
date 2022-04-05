import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = ({});
  }
  handleOnClick({target}) {
    const value = target.value;
    switch (value) {
      case 'DESARROLLO': 
        document.getElementById('SecondSectionContainer').scrollIntoView();
      break;
      case 'CONTACTO': 
       document.getElementById('ThirdSection').scrollIntoView();
      break;
      case 'NOSOTROS': 
        document.getElementById('fourthSectionContainer').scrollIntoView();
      break;
      default:
        console.log('out of bounds');
      break;
    }
  }
  render() {
    return (
      <div id="NavBar">
          <ul>
              <li><input type="button" value="DESARROLLO" onClick={this.handleOnClick} /></li>
              <li><input type="button" value="CONTACTO" onClick={this.handleOnClick} /></li>
              <li><input type="button" value="NOSOTROS" onClick={this.handleOnClick} /></li>
              <li><input type="button" value="PREGUNTAS" onClick={this.handleOnClick} /></li>
          </ul>
      </div>
    )
  }
}
