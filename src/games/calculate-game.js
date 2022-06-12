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

  const getGameData = () => {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operator = getRandomOperator();
    const question = `${num1} ${operator} ${num2}`;
    const correct = () => {
      let result = 0;
      if (operator === '*') {
        result = num1 * num2;
      }
      if (operator === '+') {
        result = num1 + num2;
      }
      if (operator === '-') {
        result = num1 - num2;
      }
      return result.toString();
    };
    const correctAnswer = correct();
    return [question, correctAnswer];
  };

  return commonLogic(task, getGameData);
};

export default startGame;
