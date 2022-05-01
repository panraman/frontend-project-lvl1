import commonLogic from '../index.js';

const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min);

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  } return true;
};

const startGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = () => {
    const randomNumber = getRandomNumber(1, 20);
    return randomNumber;
  };

  const correctAnswer = (number) => {
    if (isPrime(number) === true) {
      return 'yes';
    }
    return 'no';
  };

  return commonLogic(task, question, correctAnswer);
};

export default startGame;
