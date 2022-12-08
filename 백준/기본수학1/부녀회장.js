const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const inputTestCase = fs.readFileSync(filePath).toString().split('\n')

function solution(inputTestCase) {
  const T = +inputTestCase.shift()
  for(let i = 0 ;i <T; i++){
    const k = +inputTestCase.shift(); // 층
    const n = +inputTestCase.shift(); // 호수
    const apartment = [];

    for(let j=0; j<=k; j++) {
      apartment.push([1])    
      for(let h=1; h<=n; h++) {
        if(j===0) { // 0층이면
          apartment[j].push(h+1);
        } else {
          apartment[j].push(apartment[j][h-1] + apartment[j-1][h])
        }
      }
    }  
    console.log(apartment[k][n-1]) 
  }
}

solution(inputTestCase)

