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

/**
 * xNum은 일차항의 합을 저장한다. (variableSum)
 * 일차항이 'x'인 경우, 'x'를 빈 문자열로 replace하고 || 연산자로 1을 할당한다.
 * num에는 !isNaN(n)인 상수항(즉, 숫자인 값들)의 합을 저장한다. (constantsSum)
 * xNum이 1인 경우는 빈 문자열을, 1이 아닌 경우 `${xNum}x`를 배열 answer에 push한다.
 * answer 배열을 ' + '로 조인해서 리턴한다.
 * 배열 요소가 하나인 경우에는 바로 리턴되어, 내가 작성한 코드처럼 분기를 나누어주지 않아도 된다.
 */
