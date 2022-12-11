const fs = require('fs');
const filePath = './input.txt';
let inputNumbers = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((el) => +el);

function solution(N) {
  let result = 0;
  function isPrime(n) {
    if (n === 2) {
      return true;
    }
    if (n === 1 || n % 2 === 0) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i++) {
      if (n % i === 0 && n !== i) {
        return false;
      }
    }
    return true;
  }
  for (let i = 0; i < inputNumbers.length - 1; i++) {
    for (let j = inputNumbers[i] + 1; j <= 2 * inputNumbers[i]; j++) {
      if (isPrime(j)) result++;
    }
    console.log(result);
    result = 0;
  }
}

solution(inputNumbers);
