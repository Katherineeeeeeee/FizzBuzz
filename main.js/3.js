const hardFunction = (number, word) => (num) => num % number === 0 ? word : '';

const isFizz = hardFunction(3, 'Fizz');
const isBuzz = hardFunction(5, 'Buzz');


[...Array(99).keys()].map(i => i + 1).forEach(i => console.log(isFizz(i) + isBuzz(i) || i))