import React from 'react';
import './App.css';

import { LDgallery } from '../gallery/gallery';

class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <LDgallery />
        <p>
          test
        </p>
      </div>
     );
  }
}
 
export default App;
