import React, { useState, useEffect } from 'react';

import './Calculator.css';

import logo from '../resources/logoWhite.svg';

import { default as solve } from './function.js';

export default function Calculator() {

   const [inputValue, setInputValue] = useState('');

   const handleOnChange = ({ target }) => {
      setInputValue(target.value);
   };

   const [arrOfResults, setArrOfResults] = useState([]);

   const handleCalculate = (Event) => {
      Event.preventDefault();
      let tempResults = [];
      console.log(tempResults);
      tempResults = solve(inputValue);
      console.log(tempResults);
      displayResults(tempResults);
   };

   const displayResults = (results) => {
      const tempArr = [];
      results.forEach((val) => {
         tempArr.push(<p>{val}</p>);
      });
      console.log(tempArr);
      setArrOfResults(tempArr);
   };

   return (
      <div className='OperatorCalc'>
         <div className='navBar'>
            <img src={logo} alt="Fevi Software logo" />
            <h1>CALCULADORA DE OPERADORES</h1>
         </div>
         <form>
            <input type="text" placeholder='INGRESA LA ECUACI&Oacute;N' onChange={handleOnChange} className='OperatorCalcInput' />
            <input type="button" value="calcular" onClick={handleCalculate} />
         </form>
         <p className='Instructions'>
            <span className='colorRed'>RECUERDA AGREGAR PARENTESIS AL PRINCIPIO Y FINAL DEL PROBLEMA.</span><br /><br />
            RECUERDA QUE LOS S&Iacute;MBOLOS PERMITIDOS SON:
            <ul>
               <li>"&&" - AND </li>
               <li>"||" - OR </li>
               <li>"!=" - no es igual</li>
               <li>"==" - igualdad</li>
               <li>"+" - suma</li>
               <li>"|" - exponente</li>
               <li>"-" - resta</li>
               <li>"*" - multiplicaci&oacute;n</li>
               <li>"/" - divisi&oacute;n</li>
               <li>"MOD" - modulo</li>
               <li>"!!" - NOT </li>
            </ul>
         </p>
         <h3>RESULTADO:</h3>
         {arrOfResults}
      </div>
   )
}
