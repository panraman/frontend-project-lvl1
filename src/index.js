import readlineSync from 'readline-sync';
import askName from './cli.js';

const commonLogic = (task, question, сorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const username = askName();
  console.log(`Hello, ${username}!\n${task}`);
  for (let i = 0; i < 3; i += 1) {
    const expression = question();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correct = сorrectAnswer(expression);
    if (userAnswer !== correct) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${username}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${username}!`);
};

export default commonLogic;
