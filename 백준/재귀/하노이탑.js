let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
let N = Number(input);

let count = 0;
let answer = [];

const hanoi = (n, from, other, to) => {
  if (n === 0) {
    return;
  } else {
    hanoi(n - 1, from, to, other);
    answer.push([from, to]);
    count++;
    hanoi(n - 1, other, from, to);
  }
};

hanoi(N, '1', '2', '3');
console.log(count);
console.log(answer.map((element) => element.join(' ')).join('\n'));
