const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');
const N = Number(input[0]);
const cards = input[1].split(' ').map((item) => +item);
const M = Number(input[2]);
const numbers = input[3].split(' ').map((item) => +item);

let answer = '';
const cardMap = new Map();

for(let i=0; i<N; i++) {
  cardMap.set(cards[i], cards[i]);
}

for(let i=0; i<M; i++) {
  if(cardMap.has(numbers[i])) {
    answer += '1 ';
  } else {
    answer += '0 ';
  }
}

console.info(answer)