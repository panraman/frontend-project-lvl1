import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
};

export default askName;
