import React, { useState, useEffect } from 'react';
import './NavSection.css';

import { default as NavBar } from './NavBar/NavBar';
import { default as MobileNavBar } from './MobileNavBar/MobileNavBar';

import websiteLogo from '../Resources/logoWhite.svg';

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
            <img src={ websiteLogo } alt="logo" />
          </div>
          <div id="NavSectionRight">
            {typeOfMenu ? <MobileNavBar /> : <NavBar />}
          </div>
      </div>
  )
}
