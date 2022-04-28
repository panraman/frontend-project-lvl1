/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min);

export const greetingsAsk = (question) => console.log(question);

export const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } return false;
};

export const checkCorrectAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer !== correctAnswer) {
    return false;
  }
  return true;
};

export const makeSequenceArray = (beginNum, step, length, stepSkip) => {
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

export const fullSequenceArray = (beginNum, step, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(beginNum);
    beginNum += step;
  }
  return arr;
};
