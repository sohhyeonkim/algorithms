<a href="https://school.programmers.co.kr/learn/courses/30/lessons/12951#qna">JadenCase</a>

JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

### 제한사항

- s는 길이 1 이상 200 이하인 문자열입니다.
- s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
  - 숫자는 단어의 첫 문자로만 나옵니다. 
  - 숫자로만 이루어진 단어는 없습니다.
  - 공백문자가 연속해서 나올 수 있습니다.

### 나의 풀이

- 제한사항에 따르면 공백문자가 연속해서 나올 수 있으므로, el이 빈 문자열인 경우 빈 문자열을 반환하는 조건을 추가한다.

```js
function solution(s) {
    return s.split(" ").map(el => {
        if(!el) return el;
        
        const first = el[0];
        const rest = el.slice(1);
        return first.toUpperCase()+ rest.toLowerCase();
    }).join(" ")
}
```

### 다른 분의 풀이

- `charAt`은 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환하는 메서드이다. 만약 빈 문자열인 경우 빈 문자열을 리턴한다. 그러므로, 공백문자가 연속해서 나오는 경우도 통과할 수 있다.

```js
function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
```