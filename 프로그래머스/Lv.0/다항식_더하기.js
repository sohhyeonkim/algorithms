// 나의 풀이
function solution(polynomial) {
  const arr = polynomial.split(' + ');
  const variableSum = arr
    .filter((el) => el[el.length - 1] === 'x')
    .map((el) => (Number(el.slice(0, -1)) === 0 ? 1 : Number(el.slice(0, -1))))
    .reduce((acc, cur) => acc + cur, 0);
  const constantsSum = arr
    .filter((el) => Number(el))
    .map((el) => +el)
    .reduce((acc, cur) => acc + cur, 0);

  const variable =
    variableSum === 0
      ? variableSum
      : variableSum > 0 && variableSum === 1
      ? 'x'
      : `${variableSum}x`;

  if (variable && constantsSum > 0) {
    return `${variable} + ${constantsSum}`;
  }
  if (variable && constantsSum === 0) {
    return `${variable}`;
  }
  return `${constantsSum}`;
}

/**
 * polynomial을 ' + '으로 split해서 일차항과 상수항만 배열 arr에 저장한다.
 * 일차항의 합과 상수항의 합을 각각 저장한다. 각각 값이 없을때는 0이 저장된다.
 * 일차항의 경우, variableSum이 0일때는 일차항을 생략하고, 1일때는 1을 생략하고('x') 1 이상일때는 일차항(ex.'2x')을 표시해야한다.
 */

// 다른 분의 풀이
function solution(polynomial) {
  const arr = polynomial.split(' + ');
  const xNum = arr
    .filter((n) => n.includes('x'))
    .map((n) => n.replace('x', '') || '1')
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  const num = arr
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? '' : xNum}x`);
  if (num) answer.push(num);

  return answer.join(' + ');
}
