import commonLogic from '../index.js';
import getRandomNumber from '../helpers.js';

const makeSequenceArray = (beginNum, step, length) => {
  const arr = [];
  let data = beginNum;
  for (let i = 0; i < length; i += 1) {
    arr.push(data);
    data += step;
  }
  return arr;
};

const startGame = () => {
  const task = 'What number is missing in the progression?';

  const getGameData = () => {
    const stepSize = getRandomNumber(1, 10);
    const startNumber = getRandomNumber(1, 100);
    const chainLength = getRandomNumber(5, 10);
    const arrProgression = makeSequenceArray(startNumber, stepSize, chainLength);
    const stepSkip = getRandomNumber(0, arrProgression.length);
    const trueAnswer = arrProgression[stepSkip].toString();
    arrProgression[stepSkip] = '..';
    const stringProgression = arrProgression.join(' ');
    return [stringProgression, trueAnswer];
  };

  return commonLogic(task, getGameData);
};

export default startGame;
