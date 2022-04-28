import askName from '../src/cli.js';
import {
  getRandomNumber, greetingsAsk, getUserAnswer, checkCorrectAnswer,
} from '../src/index.js';

const largestDivisor = (num1, num2) => {
  let divisor = 1;
  if (num1 % num2 === 0) {
    return num2;
  }
  if (num2 % num1 === 0) {
    return num1;
  }
  for (let i = 1; i < num1 && i < num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = i;
    }
  } return divisor;
};

function gsdGame() {
  const username = askName();

  greetingsAsk(`Hello, ${username}!\nFind the greatest common divisor of given numbers.`);

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    console.log(`Question: ${num1} ${num2}`);

    const correctAnswer = largestDivisor(num1, num2);
    const userAnswer = getUserAnswer();

    const check = checkCorrectAnswer(Number(userAnswer), correctAnswer);

    if (check === false) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
    } console.log('Correct!');
  }

  return console.log(`Congratulations, ${username}!`);
}

export default gsdGame;
