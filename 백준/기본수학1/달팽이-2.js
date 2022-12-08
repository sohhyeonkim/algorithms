const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString();

const [a,b,c] = input.split(" ").map(item => +item)

function solution(a,b,c){
  const result = Math.ceil((c-b)/(a-b))
  console.log(result);
}

solution(a,b,c);