import React, { useState, useEffect } from 'react';
import './FourthSection.css';
import { default as Ricardo } from './profiles/Ricardo';
import { default as Andres } from './profiles/Andres';
import './profiles/profiles.css';

export default function FourthSection() {
  const [fourthSectionStyle, setFourthSectionStyle] = useState({opacity: 0});
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  const handleScroll = () => {
    const fourthSection = document.getElementById('fourthSectionContainer');
    if (fourthSection.offsetTop < document.documentElement.scrollTop + (fourthSection.offsetHeight)/2 ) {
      setFourthSectionStyle({opacity: 1});
      document.getElementById('NavSection').style = "background-color: var(--website-bg)";
    } else {
      setFourthSectionStyle({opacity: 0});
      document.getElementById('NavSection').style = "background-color: black";
    }
  };

  const [galleryStyles, setGalleryStyles] = useState('Left');
  const handleOnClick = ({ target }) => {
    setGalleryStyles(target.value);
  };

  return (
    <div id='fourthSectionContainer'>
      <div className='fourthSection' style={fourthSectionStyle}>
        <h2 className='fourthSectionTitle'>EL EQUIPO</h2>
        <div className='fourthSectionProfilesGallery' style={galleryStyles === 'Left' ? {transform: 'translateX(25%)'} : {transform: 'translateX(-25%)'}}>
        <Ricardo />
        <Andres />
        </div>
        <div className='selectedProfileCircles'>
            <button onClick={handleOnClick} value="Left" style={galleryStyles === 'Left' ? {backgroundColor: 'white'} : {}}></button>
            <button onClick={handleOnClick} value="Right" style={galleryStyles === 'Right' ? {backgroundColor: 'white'} : {}}></button>
        </div>
      </div>
    </div>
  )
}
