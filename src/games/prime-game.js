import commonLogic from '../index.js';
import getRandomNumber from '../randomizer.js';

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
  const question = () => getRandomNumber(1, 20);

  const correctAnswer = (number) => ((isPrime(number)) ? 'yes' : 'no');

  return commonLogic(task, question, correctAnswer);
};

export default startGame;
