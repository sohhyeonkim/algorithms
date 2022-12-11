const fs = require('fs');
const filePath = './input.txt';
const [M, N] = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((el) => +el);
function solution(M, N) {
  const result = [];
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

  for (let i = M; i <= N; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

solution(M, N);
