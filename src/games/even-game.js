import commonLogic from '../index.js';

const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min);

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } return false;
};

const startGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = () => {
    const randomNumber = getRandomNumber(1, 10);
    return randomNumber;
  };

  const correctAnswer = (number) => {
    if (isEven(number) === true) {
      return 'yes';
    }
    return 'no';
  };

  return commonLogic(task, question, correctAnswer);
};

export default startGame;
