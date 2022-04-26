import askName from '../src/cli.js';
import {
  getRandomNumber, greetingsAsk, getUserAnswer, checkCorrectAnswer,
} from '../src/index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  } return 'yes';
};

const primeGame = () => {
  const username = askName();
  greetingsAsk(`Hello, ${username}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`);

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = getUserAnswer();

    const correctAnswer = isPrime(randomNumber);

    const check = checkCorrectAnswer(userAnswer, correctAnswer);
    if (check === false) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${username}!`);
};

export default primeGame;
