const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [n1, n2] = fs.readFileSync(filePath).toString().split('\n').map(el => +el)
function solution(n1, n2){
  let result = 0;
  const primes = [];

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

  for(let i=n1; i<=n2; i++) {
    if(isPrime(i)) {
      result += i
      primes.push(i)
    }
  }
  console.log(result>0 ? `${result}\n${Math.min(...primes)}` : -1);
}

solution(n1, n2);