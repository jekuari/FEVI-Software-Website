import React, { Component } from 'react';

import { default as NavSection } from '../NavSection/NavSection';
import { default as FirstSection } from '../FirstSection/FirstSection';
import { default as SecondSection } from '../SecondSection/SecondSection';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavSection />
        <FirstSection />
        <SecondSection />
      </div>
    )
  }
}
