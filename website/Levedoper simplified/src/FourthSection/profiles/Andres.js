import React, {useState, useEffect} from 'react';
import ricardo from '../../Resources/ricardo-fevi.webp';

export default function Ricardo() {
  return (
     <div className='fourthSectionInfoWrapper'>
          <h3>Andrés Villarreal</h3>
          <div className='fourthSectionInfo'>
               <div className='fourthSectionImageContainer'>
                    <img src={ricardo} alt="" />
               </div>
               <article>
                    <p><strong>¿Cuál es tu rol?</strong><br/><br/>
                    Líder de proyectos<br/><br/>
                    <strong>¿Qué haces exactamente?</strong><br/><br/>
                    Me encargo de realizar o monitorear todo el proceso de desarrollo de los sitios o apliaciones web.<br/><br/>
                    <strong>¿Cuáles son tus habilidades o conocimientos?</strong><br /><br/>
                    Estoy certificado como Full-Stack Engineer y actualmente estudio ingeniería de Software en la Universidad Politécnica de Santa Rosa Jáuregui en Querétaro.<br /><br/>
                    <strong>¿Qué lenguajes y software sabes usar?</strong><br /><br/>
                    HTML, CSS, JavaScript, PostgreSQL, WordPress, React.js, Express.js, SSH, Git, Adobe Photoshop, entre otros.
                    </p>
               </article>
          </div>
      </div>
  )
}