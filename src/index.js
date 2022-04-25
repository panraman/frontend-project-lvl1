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
