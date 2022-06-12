import commonLogic from '../index.js';
import getRandomNumber from '../randomizer.js';

const isEven = (num) => (num % 2 === 0);

const startGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getGameData = () => {
    const question = getRandomNumber(1, 10).toString();
    const correct = (number) => ((isEven(number) ? 'yes' : 'no'));
    const correctAnswer = correct(question).toString();
    return [question, correctAnswer];
  };

  return commonLogic(task, getGameData);
};

export default startGame;
