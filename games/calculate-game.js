/* eslint-disable no-unreachable-loop */
/* eslint-disable no-eval */
import askName from '../src/cli.js';
import {
  getRandomNumber, greetingsAsk, getUserAnswer, checkCorrectAnswer,
} from '../src/index.js';

const operators = ['*', '+', '-'];

const getRandomOperator = () => {
  const i = getRandomNumber(0, 3);
  return operators[i];
};

function calc() {
  const username = askName();
  greetingsAsk(`Hello, ${username}!\nWhat is the result of the expression?`);

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 30);
    const operator = getRandomOperator();

    const correctAnswer = eval(`${num1} ${operator} ${num2}`);

    console.log(`Question: ${num1} ${operator} ${num2}`);

    const userAnswer = getUserAnswer();

    const check = checkCorrectAnswer(Number(userAnswer), correctAnswer);

    if (check === false) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${username}!`);
}

export default calc;
