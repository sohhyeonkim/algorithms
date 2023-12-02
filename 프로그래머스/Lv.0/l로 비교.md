### 나의 풀이
- 정규표현식을 이용하여 a-k까지의 문자를 l로 변경

```js
function solution(myString) {
    return myString.replace(/[a-k]/g, 'l');
}
```

### 다른 분의 풀이 
- 문자열 자체로 대소비교

```js
function solution(myString) {
    return [...myString].map((v) => v < 'l' ? 'l' : v).join('');
}
```