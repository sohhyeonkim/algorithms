### 나의 풀이

- Object를 이용해서 풀었는데, Object.keys()로 찾아낸 키의 순서가 보장되지 않아서 테스트 케이스 실패
- 입력 순서가 출력시에도 보장되는 Map을 이용해서 풀이
- Map은 동일한 값을 덮어쓸 수 있으므로 m.has로 중복을 체크하고, 중복이 아닐 경우에만 m.set으로 값을 저장 -> Set을 이용하는 것이 더 적절한 풀이였을 것 같다.

```js
function solution(arr, k) {
    const m = new Map();
    for(let i=0; i<arr.length; i++) {
        if(!m.has(arr[i])) {
            m.set(arr[i], i);
        }
    }
    const keys = Array.from(m.keys());
    return keys.length < k ? keys.slice(0,k).concat(Array(k-keys.length).fill(-1)) : keys.slice(0,k)
}
```

### 다른 분의 풀이 1

- Set을 이용해서 풀이
- Set은 중복을 허용하지 않으므로, arr로 Set을 만들고, Set의 크기가 k보다 작으면 Set을 배열로 변환해서 -1을 채워넣고, k보다 크면 Set을 배열로 변환해서 k개만큼 잘라서 반환

```js
function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
}
```

### 다른 분의 풀이 2

- Set을 이용해서 풀이
- 중복이 없는 Set을 만들고, k만큼의 크기를 가진 배열을 만들어서 -1로 채워넣고, Set을 배열로 변환해서 k개만큼 잘라서 반환

```js
function solution(arr, k) {
    return [...Array.from(new Set(arr)), ...new Array(k).fill(-1)].slice(0,k);
}
```