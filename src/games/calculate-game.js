/* eslint-disable no-eval */
import commonLogic from '../index.js';
import getRandomNumber from '../randomizer.js';

const operators = ['*', '+', '-'];

const getRandomOperator = () => {
  const i = getRandomNumber(0, 3);
  return operators[i];
};

const startGame = () => {
  const task = 'What is the result of the expression?';
  const question = () => {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operator = getRandomOperator();
    const result = `${num1} ${operator} ${num2}`;
    return result;
  };
  const correctAnswer = (expression) => String(eval(expression));

  return commonLogic(task, question, correctAnswer);
};

export default startGame;
