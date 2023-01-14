const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');
const [N,M] = input.shift().split(' ').map((item) => +item);
const words = input.splice(0,N);
const toCheck = input.splice(0,M);

const set = new Set(words)
let answer = 0;

for(const item of toCheck) {
  if(set.has(item)) {
    answer++;
  }
}

console.log(answer)