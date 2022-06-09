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
    const result = [];
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operator = getRandomOperator();
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = String(eval(question));
    result.push(question.toString());
    result.push(correctAnswer.toString());
    return result;
  };

  return commonLogic(task, getGameData);
};

export default startGame;
