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
  const getGameData = () => {
    const result = [];
    const question = getRandomNumber(1, 20);
    const correct = (number) => ((isPrime(number)) ? 'yes' : 'no');
    const correctAnswer = correct(question);
    result.push(question.toString());
    result.push(correctAnswer.toString());
    return result;
  };

  return commonLogic(task, getGameData);
};

export default startGame;
