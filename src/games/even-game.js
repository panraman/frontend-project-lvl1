import commonLogic from '../index.js';
import getRandomNumber from '../randomizer.js';

const isEven = (num) => (num % 2 === 0);

const startGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getGameData = () => {
    const result = [];
    const question = getRandomNumber(1, 10);
    const correct = (number) => ((isEven(number) ? 'yes' : 'no'));
    const correctAnswer = correct(question);
    result.push(question.toString());
    result.push(correctAnswer.toString());
    return result;
  };

  return commonLogic(task, getGameData);
};

export default startGame;
