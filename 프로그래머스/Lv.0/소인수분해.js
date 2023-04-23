// 나의 풀이
function solution(n) {
  const isDividable = (toDivide, value) => {
    return value % toDivide === 0;
  };
  const isPrime = (toDivide) => {
    if (toDivide === 2) {
      return true;
    }

    if (toDivide % 2 === 0) {
      return false;
    }

    for (let i = 3; i <= toDivide; i++) {
      if (toDivide % i === 0 && i !== toDivide) {
        return false;
      }
    }
    return true;
  };
  let currentValue = n;
  const primes = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      while (isDividable(i, currentValue)) {
        if (!primes.find((el) => el === i)) {
          primes.push(i);
        }
        currentValue = currentValue / i;
      }
    }
  }

  return primes;
}

/**
 * i=2부터 n까지 반복문을 돌면서 나누기
 * i가 소수이면, n이 i로 더이상 나누어 떨어지지 않을때까지 나누기
 * i가 소수이면서, 인수이면 primes 배열이 추가 (이때, 이미 추가되지 않은 경우만 추가)
 * primes 배열 리턴
 * 중첩 반복문과 isPrime을 매번 확인해야하므로 비효율적이고, n값이 클수록 시간이 더 오래 걸림
 */

// 다른 분의 풀이
function solution(n) {
  let answer = [];

  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}
/**
 * 소수가 아닌 수는 항상 어떤 수의 배수이므로 이를 활용하면 isPrime 체크할 필요없음
 * 하나의 while문 안에서 n이 i로 더이상 나누어떨어지지 않을때까지 나누고, i를 answers 배열에 추가
 * n이 i로 나누어떨어지지 않으면 i++
 * answers 배열에는 같은 값이 여러개 포함되어있을 수 있으므로 Set로 중복되는 값을 제거하고 정렬하기 (이미 순서대로 i를 증가시키고 있으므로 정렬 자체는 불필요)
 */
