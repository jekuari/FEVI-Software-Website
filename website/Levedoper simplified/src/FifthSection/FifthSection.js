import React, { useState, useEffect } from 'react';

import './FifthSection.css';

export default function FifthSection() {
  return (
    <div id="FifthSection">
      <div className='FifthSectionFirst'>
        <div className='FifthSectionColumn'>
          <h3>MARKETING DIGITAL</h3>
          <p>A través de nuestras excelentes alianzas estratégicas podrás llevar tus <strong>ventas y visibilidad a otro nivel.</strong></p>
        </div>
        <div className='FifthSectionColumn'>
          <h3>E-COMMERCE</h3>
          <p>Desarrollamos páginas de e-commerce a la medida, nada de uso de plantillas, con catálogos fácilmente actualizables, promociones, logística y <strong>todo lo necesario para que tu negocio funcione.</strong></p>
        </div>
        <div className='FifthSectionColumn'>
          <h3>LANDING PAGES</h3>
          <p>Sabemos lo importante que es la página de una empresa, desarrollamos tu sitio completamente personalizado, hecho a la medida, <strong>utilizamos la identidad de tu empresa como base para el desarrollo.</strong></p>
        </div>
        <div className='FifthSectionColumn'>
          <h3>WEB APPS</h3>
          <p>¿Requieres una apliación que realice o automatice algún proceso?, ¿Una red social para tus clientes? <strong>Todo es posible.</strong></p>
        </div>
        <div className='FifthSectionColumn'>
          <h3>ANIMACIONES</h3>
          <p>Un experto en animación y efectos especiales puede diseñar animaciones profesionales para cualquier recurso de tu sitio, <strong>explosiones, giros, saltos, simulaciones de física, lo que sea.</strong></p>
        </div>
        <div className='FifthSectionColumn'>
          <h3>FUNCIONALIDAD</h3>
          <p>Hacemos que tu sitio haga <strong>magia</strong>, desde botones sencillos hasta modelos 3d interactivos. </p>
        </div>
      </div>
    </div>
  )
}
