let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
let number = Number(input);
let str = '';

function star(i, j) {
  console.log;
  if (i % 3 === 1 && j % 3 === 1) {
    str += ' ';
  } else {
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
      str += '*';
    } else {
      star(Math.floor(i / 3), Math.floor(j / 3));
    }
  }
}

for (let i = 0; i < number; i++) {
  for (let j = 0; j < number; j++) {
    star(i, j);
  }
  if (i !== number - 1) {
    str += '\n';
  }
}
console.log(str);
