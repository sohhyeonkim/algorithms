const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const inputTestCase = fs.readFileSync(filePath).toString().split('\n')

const A = +inputTestCase.shift()

function solution(A, inputTestCase) {
  for(let i = 0 ;i <A; i++){
    const arr= inputTestCase[i].split(' ')
    const Height = +arr[0];
    const Number = +arr[2];
    let floor = 0;
    let roomNumber = 0;
    if(Number % Height === 0){
       floor = Height; 
       roomNumber = Number / Height;
    }else if(Number % Height !== 0){
      floor = Number % Height;
      roomNumber = Math.floor(Number / Height)+1;
   }
   if(roomNumber < 10){roomNumber = `0${roomNumber}`;}
    console.log(`${floor}${roomNumber}`);
  }
}

solution(A, inputTestCase)

