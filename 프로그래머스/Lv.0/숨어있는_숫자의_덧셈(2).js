// 나의 풀이
function solution(my_string) {
  const numbers = [];
  let number = '';
  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i])) {
      number += my_string[i];
    } else {
      numbers.push(number);
      number = '';
    }
  }
  numbers.push(number); // my_string의 마지막 글자가 숫자인 경우에도 numbers.push(number)
  return numbers.reduce((acc, cur) => {
    if (!isNaN(cur)) {
      return acc + Number(cur);
    }
    return acc;
  }, 0);
}

// 다른 분의 풀이
function solution(my_string) {
  return my_string
    .replace(/[a-z]/gi, ' ')
    .split(' ')
    .map((v) => v * 1)
    .reduce((a, b) => a + b);
}

/**
 * [a-z]/gi는 주어진 문자열에서 모든 알파벳을 ' '으로 replace한다. g는 global, i는 case insensitive로, 소문자 뿐만 아니라 대문자도 공백으로 변경한다.
 */
