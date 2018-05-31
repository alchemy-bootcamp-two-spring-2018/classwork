
const numbers = [2, 14, 67, 32, 33];

console.log('using for');

for(let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

console.log('using forEach');

numbers.forEach((number) => {
  console.log(number);
});

console.log('using map');

const squares = numbers.map((number) => {
  return number * number;
})

console.log(squares);

console.log('using filter');

const bigNumbers = numbers.filter((number) => {
  return number > 15;
})

console.log(bigNumbers);

console.log('using map and filter');

const bigSquares = numbers
  .map(number => {
    return number * number
  })
  .filter(square => {
    return square > 3000
  });

console.log(bigSquares);

console.log('using filter and map');

const squareOfBigNumbers = numbers
  .filter(number => {
    return number > 15
  })
  .map(number => {
    return number * number
  });

console.log(squareOfBigNumbers);

// use these, but realize they change the source array

const reversed = numbers.slice().reverse();
console.log('reverse', reversed, numbers);

const sorted = numbers.slice().sort((a, b) => a - b);
console.log('sorted', sorted, numbers);

const desSorted = numbers.slice().sort((a, b) => b - a);
console.log('desSorted', desSorted, numbers);