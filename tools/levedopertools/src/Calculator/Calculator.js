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
         <h2>CALCULADORA DE OPERADORES POR PASOS</h2>
         <form>
            <input type="text" placeholder='INGRESA LA ECUACI&Oacute;N' onChange={handleOnChange} className='OperatorCalcInput' />
            <input type="button" value="CALCULAR" onClick={handleCalculate} />
         </form>
         <div className='Instructions'>
            <p>Esta calculadora te permitirá realizar calculos de operadores y aritméticos por pasos.<br/>
            ingresa la ecuación en el campo de texto y presiona el botón "CALCULAR" para obtener los resultados.
            </p><br/>
            <p className='colorRed'>RECUERDA AGREGAR PARENTESIS AL PRINCIPIO Y FINAL DEL PROBLEMA.</p><br /><br />
            <p>RECUERDA QUE LOS S&Iacute;MBOLOS PERMITIDOS SON:</p><br/>
            <ul>
               <li>&bull;   "||" - OR </li>
               <li>&bull;   "!=" - no es igual</li>
               <li>&bull;   "&&" - AND </li>
               <li>&bull;   "==" - igualdad</li>
               <li>&bull;   "+" - suma</li>
               <li>&bull;   "|" - exponente</li>
               <li>&bull;   "-" - resta</li>
               <li>&bull;   "*" - multiplicaci&oacute;n</li>
               <li>&bull;   "/" - divisi&oacute;n</li>
               <li>&bull;   "MOD" - modulo</li>
               <li>&bull;   "!!" - NOT </li>
            </ul>
         </div>
         <h3>RESULTADO:</h3>
         <div className='resultsContainer'>
            {arrOfResults}
         </div>
      </div>
   )
}
