<a href="https://school.programmers.co.kr/learn/courses/30/lessons/120907">OX 퀴즈</a>

덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

### 제한 사항

- 연산 기호와 숫자 사이는 항상 하나의 공백이 존재합니다. 단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않습니다.
- 1 ≤ quiz의 길이 ≤ 10
- X, Y, Z는 각각 0부터 9까지 숫자로 이루어진 정수를 의미하며, 각 숫자의 맨 앞에 마이너스 기호가 하나 있을 수 있고 이는 음수를 의미합니다.
- X, Y, Z는 0을 제외하고는 0으로 시작하지 않습니다.
- -10,000 ≤ X, Y ≤ 10,000
- -20,000 ≤ Z ≤ 20,000
- [연산자]는 + 와 - 중 하나입니다.

### 나의 풀이

```js
function solution(quiz) {
    const calculate = (str) => {
        const [x, op, y, eq, z] = str.split(" ");
        if(op === '+') {
            return Number(x)+Number(y) === Number(z);
        } else {
            return Number(x)-Number(y) === Number(z);
        }
    }
    
    return quiz.map(el => calculate(el) ? "O" : "X");
}
```


### 다른 분의 풀이

- 변수 sign에 연산자에 따라 1 또는 -1을 할당해주고, split에 sign을 넣어서 연산자에 따라 배열을 나눠준다.
- 두번째 숫자(b)에 sign을 곱한 결과를 첫번째 숫자(a)에 더해준다.
- 그 결과가 정답과 같으면 'O'를 아니면 'X'를 리턴한다.

```js
function solution(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
}
```
