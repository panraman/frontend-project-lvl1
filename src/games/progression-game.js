/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import commonLogic from '../index.js';
import getRandomNumber from '../randomizer.js';

const makeSequenceArray = (beginNum, step, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(beginNum);
    beginNum += step;
  }
  return arr;
};

const startGame = () => {
  const task = 'What number is missing in the progression?';
  const sequence = () => {
    const stepSize = getRandomNumber(1, 10);
    const startNumber = getRandomNumber(1, 100);
    const chainLength = getRandomNumber(5, 10);
    const sequenceArray = makeSequenceArray(startNumber, stepSize, chainLength);
    return sequenceArray;
  };

  const getGameData = () => {
    const result = [];
    const arrProgression = sequence();
    const stepSkip = getRandomNumber(0, arrProgression.length);
    const trueAnswer = arrProgression[stepSkip];
    arrProgression[stepSkip] = '..';
    let stringProgression = '';
    for (const num of arrProgression) {
      stringProgression += `${num} `;
    }
    result.push(stringProgression);
    result.push(trueAnswer.toString());
    return result;
  };

  return commonLogic(task, getGameData);
};

export default startGame;
