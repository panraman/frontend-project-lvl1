/* eslint-disable no-unreachable-loop */
/* eslint-disable no-eval */
import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min);
const operators = ['*', '+', '-'];
const getRandomOperator = () => {
  const i = getRandomNumber(0, 2);
  return operators[i];
};

function calc() {
  const username = askName();

  console.log(`Hello, ${username}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 30);

    const operator = getRandomOperator();

    const correctAnswer = eval(`${num1} ${operator} ${num2}`);

    console.log(`Question: ${num1} ${operator} ${num2}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) !== correctAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet' s try again, ${username}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${username}!`);
}

export default calc;
