import React, { useState, useEffect } from 'react';
import './NavSection.css';

import { default as NavBar } from './NavBar/NavBar';

export default function NavSection(props) {
  const handleResize = () => {
    if (window.innerWidth >= 1000) {
      setTypeOfMenu(false);
    } else {
      setTypeOfMenu(true);
    }
  };
  const [typeOfMenu, setTypeOfMenu] = useState('desktop');
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <div id="NavSection">
          <div id="NavSectionLeft">
            <h1>FEVI</h1>
          </div>
          <div id="NavSectionRight">
            {typeOfMenu ? null : <NavBar />}
          </div>
      </div>
  )
}
