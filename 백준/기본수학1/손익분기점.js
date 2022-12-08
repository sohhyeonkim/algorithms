const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString();

const [a,b,c] = input.split(" ").map(item => +item)

function solution(a,b,c){
  const breakPoint = Math.floor(a/(c-b))+1;

  const result = b>=c ? -1 : breakPoint;
  console.log(result)
}

solution(a,b,c);