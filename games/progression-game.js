/* eslint-disable max-len */
import askName from '../src/cli.js';
import {
  getRandomNumber, greetingsAsk, getUserAnswer, checkCorrectAnswer, makeSequenceArray, fullSequenceArray,
} from '../src/index.js';

function progression() {
  const username = askName();
  greetingsAsk(`Hello, ${username}!\nWhat number is missing in the progression?`);

  for (let i = 0; i < 3; i += 1) {
    const stepSize = getRandomNumber(1, 10);
    const startNumber = getRandomNumber(1, 100);
    const chainLength = getRandomNumber(5, 10);
    const stepSkip = getRandomNumber(0, chainLength);

    const SequenceArray = makeSequenceArray(startNumber, stepSize, chainLength, stepSkip);

    const makeSequenceString = () => {
      let result = '';
      for (let index = 0; index < SequenceArray.length; index += 1) {
        result = `${result} ${SequenceArray[index]}`;
      }
      return result;
    };
    console.log(`Question: ${makeSequenceString()}`);
    const fullArr = fullSequenceArray(startNumber, stepSize, chainLength);
    const correctAnswer = fullArr[stepSkip];
    const userAnswer = getUserAnswer();
    const check = checkCorrectAnswer(Number(userAnswer), correctAnswer);
    if (check === false) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${username}!`);
}

export default progression;
