import React, { useState, useEffect } from 'react';
import './FourthSection.css';
import { default as Ricardo } from './profiles/Ricardo';
import { default as Andres } from './profiles/Andres';
import { default as Aldo } from './profiles/Aldo';
import './profiles/profiles.css';

export default function FourthSection() {
  const [galleryPosition, setGalleryPosition] = useState({transform: 'translateX(25%)'});

  const [galleryStyles, setGalleryStyles] = useState('first');
  const handleOnClick = ({ target }) => {
    setGalleryStyles(target.value);
    switch(target.value) {
      case 'first':
        setGalleryPosition({transform: 'translateX(25%)'});
      break;
      case 'second':
        setGalleryPosition({transform: 'translateX(-25%)'});
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
      <div className='fourthSection'>
        <h2 className='fourthSectionTitle'>EL EQUIPO</h2>
        <div className='fourthSectionProfilesGallery' style={galleryPosition}>
        <Ricardo />
        <Andres />
        </div>
        <div className='selectedProfileCircles'>
            <button onClick={handleOnClick} value="first" style={galleryStyles === 'first' ? {backgroundColor: 'white'} : {}}></button>
            <button onClick={handleOnClick} value="second" style={galleryStyles === 'second' ? {backgroundColor: 'white'} : {}}></button>
        </div>
      </div>
    </div>
  )
}
