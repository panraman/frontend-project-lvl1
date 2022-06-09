import commonLogic from '../index.js';
import getRandomNumber from '../randomizer.js';

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

const startGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';

  const correct = (expression) => {
    const getarr = expression.split(' ');
    const num1 = getarr[0];
    const num2 = getarr[1];
    const result = largestDivisor(num1, num2);
    return String(result);
  };

  const getGameData = () => {
    const result = [];
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 30);
    const question = `${num1} ${num2}`;
    const correctAnswer = correct(question);
    result.push(question.toString());
    result.push(correctAnswer.toString());
    return result;
  };

  return commonLogic(task, getGameData);
};

export default startGame;
