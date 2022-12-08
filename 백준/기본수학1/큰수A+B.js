const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString()

const [a,b] = input.split(" ").map((item) => BigInt(item))

function solution(a,b){
  const result = a+b;
  console.log(result.toString());
}

solution(a,b);