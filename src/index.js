import readlineSync from 'readline-sync';
import askName from './cli.js';

const commonLogic = (task, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const username = askName();
  console.log(`Hello, ${username}!\n${task}`);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${username}!`);
};

export default commonLogic;
