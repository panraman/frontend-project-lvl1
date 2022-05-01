import commonLogic from '../index.js';

const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min);

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
  const question = () => {
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 30);
    const expression = `${num1} ${num2}`;
    return expression;
  };

  const correctAnswer = (expression) => {
    const getarr = expression.split(' ');
    const num1 = getarr[0];
    const num2 = getarr[1];
    const result = largestDivisor(num1, num2);
    return String(result);
  };

  return commonLogic(task, question, correctAnswer);
};

export default startGame;
