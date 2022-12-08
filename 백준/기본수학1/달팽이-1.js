const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString();

const [a,b,c] = input.split(" ").map(item => +item)

function solution(a,b,c){
  let height = 0;
  let result = 0;
  while(height<c) {
    result++;
    height += a;
    if(height >= c) {
      break;
    } else{
      height -= b;
    }
  }
  console.log(result);
}

solution(a,b,c);