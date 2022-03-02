// 
const rSync = require('readline-sync');

let operator = '';
let num1 = '';
let num2 = '';

function getOperator() {
  operator = rSync.question('Please choose an arithmetic operator to begin...(\+, -, \*, \/) ');
  
  if (operator == '+') {
    console.log('Ok, Addition');
  } else if (operator == '-') {
    console.log('Ok, Subtraction');
  } else if ( operator == '*') {
    console.log('Ok, Multiplication');
  } else if (operator == '/') {
    console.log('Ok, Division');
  } else {
    console.log('Work with me here...try again');
    getOperator();
  }
}

function getUserNum() {
  num1 = rSync.questionInt('The fun begins, please choose your first number! ');
  console.log('OK, got it! ' + num1 + ' is your first number. ');

  num2 = rSync.questionInt('OK, what is your second number??? ');
  console.log('OK, got it! ' + num2 + ' is your second number. ');
} 

function operation() {
  const sum = (parseInt(num1) + parseInt(num2));
  const dif = (parseInt(num1) - parseInt(num2));
  const pro = (parseInt(num1) * parseInt(num2));
  const quo = (parseInt(num1) / parseInt(num2));
 
  if (operator == '+') {
    console.log('Drum Roll\* baDa taDa baDa taDa baDa taDa baDa taDa The answer is ' + sum + '!!!');
  } else if (operator == "-") {
    console.log('Drum Roll\* baDa taDa baDa taDa baDa taDa baDa taDa The answer is ' + dif + '!!!');
  } else if (operator == "*") {
    console.log('Drum Roll\* baDa taDa baDa taDa baDa taDa baDa taDa The answer is ' + pro + '!!!');
  } else if (operator == "/") {
    console.log('Drum Roll\* baDa taDa baDa taDa baDa taDa baDa taDa The answer is ' + quo + '!!!');
  }
}

getOperator();
getUserNum();
operation();