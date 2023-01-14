const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().split('\n');
const [totalCount, questionCount] = input.shift().split(' ').map((item) => +item);

const pokemons = input.splice(0, totalCount);
const questions = input.splice(0, questionCount);
const encyclopedia = new Map();
let count = 1;
for(let i=0; i<totalCount; i++) {
  encyclopedia.set(pokemons[i], count);
  count++;
}

let answer = '';

for(let i=0; i<questionCount; i++) {
  if(Number.isNaN(Number(questions[i]))) {
    answer += `${encyclopedia.get(questions[i])} ` 
  } else {
    answer += `${pokemons[Number(questions[i])-1]} `
  }
}

console.log(answer.trim().split(' ').join('\n'));