import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min);

function calc() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const correctAnswer = num1 + num2;

  const username = askName();

  console.log(`Hello, ${username}!`);
  console.log('What is the result of the expression?');
  console.log(`Question: ${num1} + ${num2}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (Number(userAnswer) === correctAnswer) {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
    Let' s try again, ${username}!`;
}

export default calc;
