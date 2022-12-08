const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString(); //<-
input = input.split("\n");

const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; ++i) {
  const arr = input[i].split(" ").map((item) => +item);
  let newArr = [];
  for (let j = 1; j < arr.length; j++) {
    newArr.push(arr[j]);
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}

solution(inputC, inputTestCase);

function solution(C, inputTestCase) {
  /**
   * 문제 풀이
   */
  console.log("정답출력");
}
