/* eslint-disable no-param-reassign */
import commonLogic from '../index.js';

const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min);

const makeSequenceArray = (beginNum, step, length, stepSkip) => {
  const points = '..';
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    if (i === stepSkip) {
      arr.push(points);
    } else {
      arr.push(beginNum);
    }
    beginNum += step;
  }
  return arr;
};

const makeSequenceString = (sequenceArray) => {
  let result = '';
  for (let index = 0; index < sequenceArray.length; index += 1) {
    result = `${result}${sequenceArray[index]} `;
  }
  return result;
};

const startGame = () => {
  const task = 'What number is missing in the progression?';
  const question = () => {
    const stepSize = getRandomNumber(1, 10);
    const startNumber = getRandomNumber(1, 100);
    const chainLength = getRandomNumber(5, 10);
    const stepSkip = getRandomNumber(0, chainLength);
    const sequenceArray = makeSequenceArray(startNumber, stepSize, chainLength, stepSkip);
    const sequence = makeSequenceString(sequenceArray);
    return sequence;
  };

  const correctAnswer = (expression) => {
    const arrayExpression = expression.split(' ');
    const findSkipNumber = (arr) => {
      let result = 0;
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === '..') {
          result += i;
        }
      } return result;
    };
    const skipIndex = findSkipNumber(arrayExpression);
    if (skipIndex < 2) {
      const different = (Number(arrayExpression[3])) - (Number(arrayExpression[2]));
      const result = (Number(arrayExpression[skipIndex + 1])) - different;
      return String(result);
    }
    const different = (Number(arrayExpression[1])) - (Number(arrayExpression[0]));
    const result = Number(arrayExpression[skipIndex - 1]) + different;
    return String(result);
  };

  return commonLogic(task, question, correctAnswer);
};

export default startGame;
