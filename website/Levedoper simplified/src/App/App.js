import React, { Component } from 'react';

import './App.css';

import { default as NavSection } from '../NavSection/NavSection';
import { default as FirstSection } from '../FirstSection/FirstSection';
import { default as SecondSection } from '../SecondSection/SecondSection';
import { default as ThirdSection } from '../ThirdSection/ThirdSection';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({webpSupport: true, isMobile: false});
    this.detectIfWebpIsSupported = this.detectIfWebpIsSupported.bind(this);
  }
  componentDidMount() {
    this.setState({webpSupport: this.detectIfWebpIsSupported()});
    const eventListener1 = window.addEventListener('resize', () => {
      this.detectMobile();
    });
    this.setState({eventListener1: eventListener1});
    this.detectMobile();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.state.eventListener1);
  }

  detectMobile() {
    if (window.innerWidth >= 640) {
      this.setState({isMobile: false});
    } else {
      this.setState({isMobile: true});
    }
  }

  detectIfWebpIsSupported() {
    var elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d')))
    {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    else
    {
      return false;
    }
  }

  render() {
    return (
      <div id="App">
        <NavSection isMobile={this.state.isMobile}/>
        <FirstSection isMobile={this.state.isMobile} />
        <SecondSection webpSupport={this.state.webpSupport} isMobile={this.state.isMobile} />
        <ThirdSection isMobile={this.state.isMobile} />
      </div>
    )
  }
}
