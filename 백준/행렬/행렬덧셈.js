const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const [row, column] = input.shift().split(' ');
const matrix = input.map((el) => el.split(' '));

const matrixA = [];
const matrixB = [];
for (let i = 0; i < matrix.length; i++) {
  if (i < row) {
    matrixA.push(matrix[i]);
  } else {
    matrixB.push(matrix[i]);
  }
}

const result = [];
for (let i = 0; i < row; i++) {
  const arr = new Array();
  result.push(arr);
}

for (let i = 0; i < row; i++) {
  for (let j = 0; j < column; j++) {
    result[i][j] = Number(matrixA[i][j]) + Number(matrixB[i][j]);
  }
}

let answer = '';
for (let i = 0; i < result.length; i++) {
  answer += result[i].join(' ');
  answer += '\n';
}
console.log(answer);
