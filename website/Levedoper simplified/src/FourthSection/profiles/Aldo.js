import React, {useState, useEffect} from 'react';
import andres from '../../Resources/andres-fevi.webp';

export default function Aldo() {
  return (
     <div className='fourthSectionInfoWrapper'>
          <h3>Aldo Fuguay</h3>
          <div className='fourthSectionInfo'>
               <div className='fourthSectionImageContainer'>
                    <img src={andres} alt="" />
               </div>
               <article>
                    <p><strong>¿Cuál es tu rol?</strong><br/><br/>
                    Diseño de animaciones y recursos gráficos.<br/><br/>
                    <strong>¿Qué haces exactamente?</strong><br/><br/>
                    Animaciones, refinamiento y diseño de UX/UI.<br/><br/>
                    <strong>¿Cuáles son tus habilidades o conocimientos?</strong><br /><br/>
                    Estudio Animación y Efectos Especiales en la UPSRJ. He trabajado con Clipper, con la universidad y múltiples empresas más para el desarrollo de visuales.<br /><br/>
                    <strong>¿Qué lenguajes y software sabes usar?</strong><br /><br/>
                    HTML, CSS, PHP, C, C++, SQL, PHPMyAdmin, SSH, Git, Ubuntu.
                    </p>
               </article>
          </div>
      </div>
  )
}