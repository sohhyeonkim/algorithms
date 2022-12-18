const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const filePath = './input.txt';

let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((el) => el.split(' '));
const count = Number(input.shift());

let area = 0;
const box = Array.from({ length: 100 }, () => new Array(100).fill(0));
for (let i = 0; i < count; i++) {
  const row = +input[i][0];
  const col = +input[i][1];
  for (let r = row; r < row + 10; r++) {
    for (let c = col; c < col + 10; c++) {
      if (box[r][c] === 0) {
        box[r][c] = 1;
        area++;
      }
    }
  }
}
console.log(area);
