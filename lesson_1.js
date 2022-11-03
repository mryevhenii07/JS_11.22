const errorMessages = 'Incorrect input!';

//TASK=1

const firstNumber = Number(prompt('First number'));
const secondNumber = Number(prompt('Second number'));

const sum = firstNumber + secondNumber;
const product = firstNumber * secondNumber;
const power = firstNumber ** secondNumber;

if (secondNumber && firstNumber) {
  console.log('First number:', firstNumber);
  console.log('Second number:', secondNumber);
  console.log('Sum:', sum);
  console.log('Product:', product);
  console.log('Power:', power);
} else {
  console.log(errorMessages);
}

//TASK - 2;

const character = prompt('Enter character');
const number = parseFloat(prompt('Enter number'));

let matrix = '';

if (character.length > 0 && character.length <= 3 && number > 0 && number <= 10) {
  for (let i = 0; i < number; i++) {
    if (typeof number === 'number') {
      matrix += character;
    }
  }

  for (let i = 0; i < number; i++) {
    console.log(matrix);
  }
} else {
  console.log(errorMessages);
}
