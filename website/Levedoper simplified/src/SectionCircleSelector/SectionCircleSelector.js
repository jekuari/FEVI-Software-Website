import React, { useState, useEffect } from 'react';
import './SectionCircleSelector.css';

import { default as CircleSelector } from './CircleSelector/CircleSelector';


export default function SectionCircleSelector() {
     const [currentSection, setCurrentSection] = useState([true, false, false, false]);
     useEffect(() => {
          handleSections();
          window.addEventListener('scroll', handleSections);
          return () => {window.removeEventListener('scroll', handleSections);};
     }, []);
     const handleSections = () => {
          if (window.scrollY < document.getElementById('FirstSection').offsetHeight - window.innerHeight / 2) {
               setCurrentSection([true, false, false, false]);
          } else if (window.scrollY + window.innerHeight / 2 > document.getElementById('SecondSectionContainer').offsetTop && window.scrollY < document.getElementById('SecondSectionContainer').offsetTop + document.getElementById('SecondSectionContainer').offsetHeight - window.innerHeight / 2) {
               setCurrentSection([false, true, false, false]);
          } else if (window.scrollY + window.innerHeight / 2 > document.getElementById('ThirdSection').offsetTop && window.scrollY < document.getElementById('ThirdSection').offsetTop + document.getElementById('ThirdSection').offsetHeight - window.innerHeight / 2) {
               setCurrentSection([false, false, true, false]);
          } else if (window.scrollY + window.innerHeight / 2 > document.getElementById('fourthSectionContainer').offsetTop && window.scrollY < document.getElementById('fourthSectionContainer').offsetTop + document.getElementById('fourthSectionContainer').offsetHeight - window.innerHeight / 2) {
               setCurrentSection([false, false, false, true]);
          }
     };
     const handleClick = ({target}) => {
          switch(target.value) {
               case '0':
                    document.getElementById('FirstSection').scrollIntoView();
               break;
               case '1':
                    document.getElementById('SecondSectionContainer').scrollIntoView();
               break;
               case '2':
                    document.getElementById('ThirdSection').scrollIntoView();
               break;
               case '3':
                    document.getElementById('fourthSectionContainer').scrollIntoView();
               break;
               default:
                    console.log('unexpected');
               break;
          }
     };
  return (
    <div className='SectionCircleSelector'>
              <CircleSelector value="0" style={currentSection[0] ? {backgroundColor: 'white'} : null} onClick={handleClick} />
              <CircleSelector value="1" style={currentSection[1] ? {backgroundColor: 'white'} : null} onClick={handleClick} />
              <CircleSelector value="2" style={currentSection[2] ? {backgroundColor: 'white'} : null} onClick={handleClick} />
              <CircleSelector value="3" style={currentSection[3] ? {backgroundColor: 'white'} : null} onClick={handleClick} />
     </div>
  )
}
