import commonLogic from '../index.js';
import getRandomNumber from '../randomizer.js';

const isEven = (num) => ((num % 2 === 0));

const startGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = () => {
    const randomNumber = getRandomNumber(1, 10);
    return randomNumber;
  };

  const correctAnswer = (number) => ((isEven(number) ? 'yes' : 'no'));

  return commonLogic(task, question, correctAnswer);
};

export default startGame;
