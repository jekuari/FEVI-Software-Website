import React, { useState, useEffect } from 'react';
import './FourthSection.css';
import { default as Ricardo } from './profiles/Ricardo';
import { default as Andres } from './profiles/Andres';
import { default as Aldo } from './profiles/Aldo';
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

  const [galleryPosition, setGalleryPosition] = useState({transform: 'translateX(33.33%)'});

  const [galleryStyles, setGalleryStyles] = useState('first');
  const handleOnClick = ({ target }) => {
    setGalleryStyles(target.value);
    switch(target.value) {
      case 'first':
        setGalleryPosition({transform: 'translateX(33.33%)'});
      break;
      case 'second':
        setGalleryPosition({transform: 'translateX(0%)'});
      break;
      case 'third':
        setGalleryPosition({transform: 'translateX(-33.33%)'});
      break;
      default: 
        console.log('Out of bounds');
      break;
    }
  };

  return (
    <div id='fourthSectionContainer'>
      <div className='fourthSection' style={fourthSectionStyle}>
        <h2 className='fourthSectionTitle'>EL EQUIPO</h2>
        <div className='fourthSectionProfilesGallery' style={galleryPosition}>
        <Ricardo />
        <Andres />
        <Aldo />
        </div>
        <div className='selectedProfileCircles'>
            <button onClick={handleOnClick} value="first" style={galleryStyles === 'first' ? {backgroundColor: 'white'} : {}}></button>
            <button onClick={handleOnClick} value="second" style={galleryStyles === 'second' ? {backgroundColor: 'white'} : {}}></button>
            <button onClick={handleOnClick} value="third" style={galleryStyles === 'third' ? {backgroundColor: 'white'} : {}}></button>
        </div>
      </div>
    </div>
  )
}
