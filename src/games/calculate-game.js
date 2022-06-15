import commonLogic from '../index.js';
import getRandomNumber from '../helpers.js';

const operators = ['*', '+', '-'];

const startGame = () => {
  const task = 'What is the result of the expression?';

  const getGameData = () => {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operator = operators[getRandomNumber(0, 3)];
    const question = `${num1} ${operator} ${num2}`;
    const сalculateAnswer = () => {
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
    const correctAnswer = сalculateAnswer();
    return [question, correctAnswer];
  };

  return commonLogic(task, getGameData);
};

export default startGame;
