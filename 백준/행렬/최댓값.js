const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// const filePath = './input.txt';
let matrix = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((el) => el.split(' '));

let max = Number.MIN_SAFE_INTEGER;
let place = '';
const rows = matrix.length;
// const columns = matrix[0].length;

//solution1
/*
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    if (max < matrix[i][j]) {
      max = matrix[i][j];
      place = `${i + 1} ${j + 1}`;
    }
  }
}

console.log(`${max}\n${place}`);
*/

//solution2
for (let i = 0; i < rows; i++) {
  const rowMax = Math.max(...matrix[i]);
  if (max < rowMax) {
    max = rowMax;
    const idx = matrix[i].indexOf(`${max}`);
    place = `${i + 1} ${idx + 1}`;
  }
}
console.log(`${max}\n${place}`);
