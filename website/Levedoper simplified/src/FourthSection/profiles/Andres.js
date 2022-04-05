import React, {useState, useEffect} from 'react';
import andres from '../../Resources/andres-fevi.webp';

export default function Ricardo() {
  return (
     <div className='fourthSectionInfoWrapper'>
          <h3>Andrés Villarreal</h3>
          <div className='fourthSectionInfo'>
               <div className='fourthSectionImageContainer'>
                    <img src={andres} alt="" />
               </div>
               <article>
                    <p><strong>¿Cuál es tu rol?</strong><br/><br/>
                    Desarrollador de back-end.<br/><br/>
                    <strong>¿Qué haces exactamente?</strong><br/><br/>
                    Me encargo de hacer posible que la pagina tenga un sistema de registro correcto y contacto con el usuario desde la pagina por medio de correos electrónicos.<br/><br/>
                    <strong>¿Cuáles son tus habilidades o conocimientos?</strong><br /><br/>
                    Actualmente estudio en la Universidad Autónoma de Nuevo León (UANL) Ingeniero Administrador en Sistemas en la Facultad de Ingeniería Mecánica y Eléctrica.<br /><br/>
                    <strong>¿Qué lenguajes y software sabes usar?</strong><br /><br/>
                    HTML, CSS, PHP, C, C++, SQL, PHPMyAdmin, SSH, Git, Ubuntu.
                    </p>
               </article>
          </div>
      </div>
  )
}