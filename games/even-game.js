/* eslint-disable no-unused-expressions */
/* eslint-disable no-unreachable-loop */
import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min);

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } return false;
};

const getNumber = () => {
  const number = getRandomNumber(1, 100);
  return number;
};

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

function evenGame() {
  const username = askName();
  console.log(`Hello, ${username}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = getUserAnswer();

    const isCorrectAnswer = () => {
      if (isEven(randomNumber) === true) {
        return 'yes';
      }
      return 'no';
    };

    const correctAnswer = isCorrectAnswer();
    const checkUserAnswer = () => {
      if (isEven(randomNumber) === true && userAnswer === 'yes') {
        return true;
      } if (isEven(randomNumber) === false && userAnswer === 'no') {
        return true;
      }
      return false;
    };

    const x = checkUserAnswer();
    if (x === false) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${username}!`);
}

export default evenGame;
