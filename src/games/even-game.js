import commonLogic from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (num) => (num % 2 === 0);

const startGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getGameData = () => {
    const question = getRandomNumber(1, 10);
    const сalculateAnswer = (number) => ((isEven(number) ? 'yes' : 'no'));
    const correctAnswer = сalculateAnswer(question).toString();
    return [question, correctAnswer];
  };

  return commonLogic(task, getGameData);
};

export default startGame;
