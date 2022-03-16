import React, { Component } from 'react';
import './SecondSection.css';

import waves from './waves.svg';

import wireframe from './resources/wireframe.webp';
import thirdStage from './resources/thirdStage.webp';

export default class SecondSection extends Component {
  render() {
    return (
      <div id="SecondSectionContainer">
          <div id="SecondSectionCurves">
          <img src={waves} alt=""/>
          </div>
          <div id="SecondSection">
               <h2>METODOLOGÍA</h2>
               <div id="SecondSectionMethodology">
                 <div id="SecondSectionFirst" className='MethodologyText textRight'>
                  <h4><strong>Platicanos de tu página</strong></h4>
                  <p>Con tu ayuda, identificaremos lo que tu página necesita, te solicitaremos logotipos y recursos gráficos para el diseño de la misma.</p>
                 </div>
                 <div id="SecondSectionFisrtNumber"><p className='MethodologyNumber'><strong>1</strong></p></div>
                 <div id="SecondSectionImage" className='flex center'><img src={wireframe} alt="Wireframe" className='MethodologyImage'/></div>
                 <div className='flex center'><img src={wireframe} alt="Wireframe" className='MethodologyImage'/></div>
                 <div className='flex center'><p className='MethodologyNumber'><strong>2</strong></p></div>
                 <div className='MethodologyText'>
                  <h4><strong>Elaboramos un Wireframe</strong></h4>
                  <p>Un wireframe es un bosquejo de cómo podría lucir tu página, te lo enviaremos en formato PDF para que nos digas qué te gustaría que fuera diferente, hacer cambios y que luzca como tu quieres.</p>
                 </div>
                 <div className='MethodologyText textRight'>
                  <h4><strong>Inicio del proyecto</strong></h4>
                  <p>En esta etapa comenzamos con el diseño de la página, se te entrega un link para que puedas revisar el estado de tu página en tiempo real, se crea la versión de escritorio sin animaciones.</p>
                 </div>
                 <div className='flex center'><p className='MethodologyNumber'><strong>3</strong></p></div>
                 <div className='flex center'><img src={thirdStage} alt="Wireframe" className='MethodologyImage'/></div>
               </div>
               
          </div>
      </div>
    )
  }
}
