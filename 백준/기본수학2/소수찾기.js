const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [N, nums] = fs.readFileSync(filePath).toString().split('\n')
const inputNumbers = nums.split(' ').map(el => +el)
function solution(N, inputNumbers){
  let result = 0;

  function isPrime(n){
    if(n===2) {
      return true;
    }
    if(n === 1 || n%2===0) {
      return false;
    }
    for(let i=3; i<=Math.sqrt(n); i++) {
      if(n%i===0 && n!==i) {
        return false
      }
    }
    return true;
  }

  for(let i=0; i<N; i++) {
    if(isPrime(inputNumbers[i])) result++
  }
  console.log(result);
}

solution(N,inputNumbers);