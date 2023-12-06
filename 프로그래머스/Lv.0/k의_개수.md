### 나의 풀이

```js
function solution(i, j, k) {
    let answer = 0;
    for(let s=i; i<=j; i++) {
        answer += [...s.toString()].reduce((acc,cur) => {
           return Number(cur) === k ? acc+1 : acc; 
        },0)
    }
    return answer;
}
```

### 다른 분의 풀이 1

- i부터 j까지의 수를 문자열로 만듦.
- k로 split한 배열의 길이는 k의 개수 + 1이므로, k의 개수는 split한 배열의 길이 - 1이다.

```js
function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }

    return a.split(k).length-1;
}
```

### 다른 분의 풀이 2

- str은 위의 풀이처럼 결과적으로는 i부터 j까지의 수를 문자열로 만든 것이지만, 배열에 i부터 j까지 저장해 join시킨다는 점에서 방법에 차이가 있음.
- str을 배열로 만든 후 +연산자를 이용해 문자열을 숫자로 만들어 k와 비교함.

```js
function solution(i, j, k) {
    let str = Array(j - i + 1).fill(i).map((v, i) => v + i).join('')
    return Array.from(str).filter(t => +t === k).length;
}
```