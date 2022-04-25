/* eslint-disable no-unused-expressions */
/* eslint-disable no-unreachable-loop */

import askName from '../src/cli.js';
import {
  getRandomNumber, greetingsAsk, isEven, getUserAnswer, checkCorrectAnswer,
} from '../src/index.js';

function evenGame() {
  const username = askName();
  greetingsAsk(`Hello, ${username}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = getUserAnswer();

    const isCorrectAnswer = () => {
      if (isEven(randomNumber) === true) {
        return 'yes';
      }
      return 'no';
    };

    const correctAnswer = isCorrectAnswer();

    const check = checkCorrectAnswer(userAnswer, correctAnswer);

    if (check === false) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${username}!`);
}

export default evenGame;
