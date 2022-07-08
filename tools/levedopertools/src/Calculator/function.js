const solveArithmetic = (equationAsString, arrayOfAnswers) => {

   const operatorProblem = equationAsString;

   let problemArray = operatorProblem;

   for (let val in problemArray) {
      if ((problemArray[parseInt(val)] === '-' && isNaN(problemArray[parseInt(val) - 1])) && !isNaN(problemArray[parseInt(val) + 1])) {
         problemArray.splice(val, 2, (-1 * parseInt(problemArray[parseInt(val) + 1])));
      } 
      if (!isNaN(problemArray[parseInt(val)])) {
         problemArray.splice(parseInt(val), 1, parseInt(problemArray[parseInt(val)]));
      }
   }

   arrayOfAnswers.push(problemArray.join(''));

   while (problemArray.length !== 1) {

      let openParenthesis = [];

      let closeParenthesis = [];


      for (let i = 0; i < problemArray.length; i++) {
         if (problemArray[i] === '(') {
            openParenthesis.push(i);
         }
      }

      for (let i = 0; i < problemArray.length; i++) {
         if (problemArray[i] === ')') {
            closeParenthesis.push(i);
         }
      }

      let distances = [];

      let coordinatesArray = [];

      openParenthesis.forEach((x) => {
         closeParenthesis.forEach((y) => {
            distances.push(y - x);
            coordinatesArray.push([x, y]);
         });
      });

      const filteredDistances = [];
      const filteredCoordinatesArray = [];

      for (let j = 0; j < distances.length; j++) {
         if (distances[j] > 0) {
            filteredDistances.push(distances[j]);
            filteredCoordinatesArray.push(coordinatesArray[j]);
         }
      }

      const currentIndex = filteredDistances.indexOf(Math.min(...filteredDistances));

      const currentCoordinates = filteredCoordinatesArray[currentIndex];

      let currentParenthesis = problemArray.slice(currentCoordinates[0], currentCoordinates[1] + 1);

      while (currentParenthesis.length > 2) {
         if (currentParenthesis.includes('^')) {
            let result = 0;
            const charactersIndex = currentParenthesis.indexOf('^');
            result = Math.pow(parseInt(currentParenthesis[charactersIndex - 1]), parseInt(currentParenthesis[charactersIndex + 1]));
            currentParenthesis.splice(charactersIndex - 1, 3, result);
            arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
         }  else if (currentParenthesis.includes('!!')) {
            let result = false;
            if (!((currentParenthesis[currentParenthesis.indexOf('!!') - 1] === true || currentParenthesis[currentParenthesis.indexOf('!!') - 1] === false) && (currentParenthesis[currentParenthesis.indexOf('||') + 1] === true || currentParenthesis[currentParenthesis.indexOf('||') + 1] === false))) {
               arrayOfAnswers.push('ERROR, NO SE PUEDE NEGAR UN VALOR NUMERICO EN: ' + currentParenthesis);
               currentParenthesis = ['(', 'error', ')'];
               problemArray = 'error';
            } else {
               if (currentParenthesis[currentParenthesis.indexOf('!!') +1] === true) {
                  result = false;
               } else {
                  result = true;
               }
               currentParenthesis.splice(1, 3, result);
               arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
            }
         } else if (currentParenthesis.includes('*')) {
            let result = 0;
            const charactersIndex = currentParenthesis.indexOf('*');
            result = parseInt(currentParenthesis[charactersIndex - 1]) * parseInt(currentParenthesis[charactersIndex + 1]);
            currentParenthesis.splice(charactersIndex - 1, 3, result);
            arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
         } else if (currentParenthesis.includes('/')) {
            let result = 0;
            const charactersIndex = currentParenthesis.indexOf('/');
            result = Math.floor(parseInt(currentParenthesis[charactersIndex - 1]) / parseInt(currentParenthesis[charactersIndex + 1]));
            currentParenthesis.splice(charactersIndex - 1, 3, result);
            arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
         } else if (currentParenthesis.includes('%')) {
            let result = 0;
            const charactersIndex = currentParenthesis.indexOf('%');
            result = Math.floor(parseInt(currentParenthesis[charactersIndex - 1]) % parseInt(currentParenthesis[charactersIndex + 1]));
            if (isNaN(result)) {
               arrayOfAnswers.push('ERROR, no se puede obtener el módulo en: ' + `${currentParenthesis[charactersIndex - 1]} % ${currentParenthesis[charactersIndex + 1]}`);
               return 0;
            }
            currentParenthesis.splice(charactersIndex - 1, 3, result);
            arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
         } else if (currentParenthesis.includes('-')) {
            let result = 0;
            const charactersIndex = currentParenthesis.indexOf('-');
            let firstNumber = 0;
            if (isNaN(parseInt(currentParenthesis[charactersIndex - 1]))) {
               firstNumber = 0;
            } else {
               firstNumber = parseInt(currentParenthesis[charactersIndex - 1]);
            }
            let secondNumber = 0;
            if (isNaN(parseInt(currentParenthesis[charactersIndex + 1]))) {
               secondNumber = 0;
            } else {
               secondNumber = parseInt(currentParenthesis[charactersIndex + 1]);
            }
            result = firstNumber - secondNumber;
            currentParenthesis.splice(charactersIndex - 1, 3, result);
            arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));

         } else if (currentParenthesis.includes('+')) {
            let result = 0;
            const charactersIndex = currentParenthesis.indexOf('+');
            result = parseInt(currentParenthesis[charactersIndex - 1]) + parseInt(currentParenthesis[charactersIndex + 1]);
            currentParenthesis.splice(charactersIndex - 1, 3, result);
            arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
         } else if (currentParenthesis.includes('==')) {
            let result = false;
            if (parseInt(currentParenthesis[1]) == parseInt(currentParenthesis[3])) {
               result = true;
            } else {
               result = false;
            }
            currentParenthesis.splice(1, 3, result);
            arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
         } else if (currentParenthesis.includes('<')) {
            let result = false;
            if (parseInt(currentParenthesis[currentParenthesis.indexOf('<') - 1]) < parseInt(currentParenthesis[currentParenthesis.indexOf('<') + 1])) {
               result = true;
            } else {
               result = false;
            }
            currentParenthesis.splice(currentParenthesis.indexOf('<') - 1, 3, result);
            arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
         } else if (currentParenthesis.includes('>')) {
            let result = false;
            if (parseInt(currentParenthesis[currentParenthesis.indexOf('>') - 1]) > parseInt(currentParenthesis[currentParenthesis.indexOf('>') + 1])) {
               result = true;
            } else {
               result = false;
            }
            currentParenthesis.splice(currentParenthesis.indexOf('>') - 1, 3, result);
            arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
         } else if (currentParenthesis.length === 3) {
            if (currentParenthesis[1] == 'error') {
               return 0;
            } else {
               currentParenthesis.pop();
               currentParenthesis.shift();
               arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
            }
         } else if (currentParenthesis.length === 4) {
            let result = 0;
            result = parseInt(currentParenthesis[1]) + parseInt(currentParenthesis[2]);
            currentParenthesis.splice(1, 2, result);
            arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
         } else if (currentParenthesis.includes('!=')) {
            let result = false;
            if (parseInt(currentParenthesis[1]) != parseInt(currentParenthesis[3])) {
               result = true;
            } else {
               result = false;
            }
            currentParenthesis.splice(1, 3, result);
            arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
         } else if (currentParenthesis.includes('&&')) {
            let result = false; 
            if (!((currentParenthesis[currentParenthesis.indexOf('&&') - 1] === true || currentParenthesis[currentParenthesis.indexOf('&&') - 1] === false) && (currentParenthesis[currentParenthesis.indexOf('&&') + 1] === true || currentParenthesis[currentParenthesis.indexOf('&&') + 1] === false))) {
               arrayOfAnswers.push('ERROR, NO SE PUEDE COMPARAR UN VALOR NUMERICO CON BOOLEANO' + currentParenthesis);
               currentParenthesis = ['(', 'error', ')'];
               problemArray = 'error';
            } else {
               if (currentParenthesis[currentParenthesis.indexOf('&&') - 1] === true && currentParenthesis[currentParenthesis.indexOf('&&') + 1] === true) {
                  result = true;
               } else {
                  result = false;
               }
               currentParenthesis.splice(1, 3, result);
               arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
            }
         } else if (currentParenthesis.includes('||')) {
            let result = false;
            if (!((currentParenthesis[currentParenthesis.indexOf('||') - 1] === true || currentParenthesis[currentParenthesis.indexOf('||') - 1] === false) && (currentParenthesis[currentParenthesis.indexOf('||') + 1] === true || currentParenthesis[currentParenthesis.indexOf('||') + 1] === false))) {
               arrayOfAnswers.push('ERROR, NO SE PUEDE COMPARAR UN VALOR NUMERICO CON BOOLEANO EN: ' + currentParenthesis);
               currentParenthesis = ['(', 'error', ')'];
               problemArray = 'error';
            } else {
               if (currentParenthesis[currentParenthesis.indexOf('||') - 1] === true || currentParenthesis[currentParenthesis.indexOf('||') + 1] === true) {
                  result = true;
               } else {
                  result = false;
               }
               currentParenthesis.splice(1, 3, result);
               arrayOfAnswers.push(problemArray.slice(0, currentCoordinates[0]).join('') + currentParenthesis.join('') + problemArray.slice(currentCoordinates[1] + 1).join(''));
            }
         } else {
            Error('Something went wrong');
            return 0;
         }
         if (currentParenthesis.length === 1) {
            problemArray.splice(currentCoordinates[0], (currentCoordinates[1] + 1 - currentCoordinates[0]), currentParenthesis[0]);
         }
      }
   }
   return (arrayOfAnswers);
};


// const solveLogic = (basicArray) => {

//    arrayOfAnswers.push(basicArray.join(''));
// };

const start = (raw) => {

   let arrayOfAnswers = [];

   const string = Array.from(raw);

   for (let words in string) {
      if (string[words] === ' ') {
         string.splice(words, 1, '');
      }
   }

   let FormattedArray = Array.from(string.join(''));

   let tempArr = [];

   for (let i = 0; i < FormattedArray.length; i++) {
      if (FormattedArray[i] === '!') {
         if (FormattedArray[i + 1] === '=') {
            tempArr.push('!=');
            i++;
         } else if (FormattedArray[i + 1] === '!') {
            tempArr.push('!!');
            i++;
         } else {
            tempArr.push(FormattedArray[i]);
         }
      } else if (FormattedArray[i] === '=') {
         if (FormattedArray[i + 1] === '=') {
            tempArr.push('==');
            i++;
         }
      } else if (FormattedArray[i] === '&') {
         if (FormattedArray[i + 1] === '&') {
            tempArr.push('&&');
            i++;
         }
      } else if (FormattedArray[i] === '|') {
         if (FormattedArray[i + 1] === '|') {
            tempArr.push('||');
            i++;
         } else {
            tempArr.push('^');
         }
      } else if (FormattedArray[i] === 'M') {
         if (FormattedArray[i + 1] === 'O') {
            tempArr.push('%');
            i++;
            i++;
         }
      } else if (FormattedArray[i] === '-' && FormattedArray[i + 1] === '-') {
         tempArr.push('--');
         i++;
      } else if (FormattedArray[i] === '+' && FormattedArray[i + 1] === '+') {
         tempArr.push('++');
         i++;
      } else {
         tempArr.push(FormattedArray[i]);
      }
   }

   arrayOfAnswers.push(tempArr.join(''));

   let cleanArray = [];

   for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i] === '--') {
         cleanArray.pop();
         cleanArray.push(parseInt(tempArr[i - 1]) - 1);
      } else if (tempArr[i] === '++') {
         cleanArray.pop();
         cleanArray.push(parseInt(tempArr[i - 1]) + 1);
      } else {
         cleanArray.push(tempArr[i]);
      }
   }

   let arrayToConvertToIntegers = [];

   for (let character of cleanArray) {
      if (!(isNaN(parseInt(character)))) {
         arrayToConvertToIntegers.push(parseInt(character));
      } else {
         arrayToConvertToIntegers.push(character);
      }
   }

   let arrayWithManyDigitNumbersCombined = [];

   for (let i = 0; i < arrayToConvertToIntegers.length; i++) {
      if (typeof(arrayToConvertToIntegers[parseInt(i)]) === "number" && typeof(arrayToConvertToIntegers[parseInt(i) + 1]) === "number") {
         arrayWithManyDigitNumbersCombined.push(parseInt(`${arrayToConvertToIntegers[parseInt(i)]}${arrayToConvertToIntegers[parseInt(i) + 1]}`));
         i++;
      } else {
         arrayWithManyDigitNumbersCombined.push(arrayToConvertToIntegers[parseInt(i)]);
      }
   }

   return solveArithmetic(arrayWithManyDigitNumbersCombined, arrayOfAnswers);
};

// const solver = {
//    start: start(),
//    result: new Promise ()
// }


export default start;