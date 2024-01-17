<a href="">N개의 최소공배수</a>

두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

### 제한 사항

- arr은 길이 1이상, 15이하인 배열입니다.
- arr의 원소는 100 이하인 자연수입니다.

### [통과 X] 나의 풀이 1

- 2,3,5,7 소수로만 나눠서 나머지가 0이 되는 수를 계속 나눠준다.
- 테스트케이스 6~10 실패
  - [13, 26]과 같이 [2,3,5,7]로 나누어 떨어지지 않는 소수가 있을 때, 13*26=338이 최소공배수가 되는데, 이 케이스가 제외됨

```js
function solution(arr) {
    let lcm = 1;
    const divider = [2,3,5,7];
    
    for(let i=0; i<divider.length; i++) {
        while(true) {
            let cnt = 0;
            for(let j=0; j<arr.length; j++) {
                if(arr[j]%divider[i] === 0) {
                    arr[j] = arr[j]/divider[i];
                    cnt++;
                }
            }
            if(cnt===0) break;
            cnt=0;
            lcm*=divider[i];
        }   
    }
    return lcm;
}
```

### [통과 O] 나의 풀이 2

- 위에서 찾은 실패 케이스를 해결하기 위해, divider 배열에 1보다 큰 arr 원소도 추가해준다.
- 마지막에 arr의 원소들을 모두 곱해주면 최소공배수가 된다.

```js
function solution(arr) {
    let lcm = 1;
    const copied = [...arr].filter(el => el>1);
    const divider = [2,3,5,7,...copied];
    
    for(let i=0; i<divider.length; i++) {
        while(true) {
            let cnt = 0;
            for(let j=0; j<arr.length; j++) {
                if(arr[j]%divider[i] === 0) {
                    arr[j] = arr[j]/divider[i];
                    cnt++;
                }
            }
            if(cnt===0) break;
            lcm*=divider[i];
        }   
    }
    return lcm * arr.reduce((acc, cur) => acc*cur);
}
```

### 다른 분의 풀이 

- 최소공배수 = 두 수의 곱 / 두 수의 최대공약수
- 최대공약수 구하기 : 유클리드 호제법 사용
    - 두 수 a,b(a>b)에 대해 a를 b로 나눈 나머지를 r이라고 할때, a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
    - gcd(a,b)에서 
        - a%b가 유효한 값이 아니면 b가 최대공약수가 된다. 
        - a%b가 유효한 값이면 gcd(b, a%b)를 재귀적으로 호출한다.

```js
function gcd(a, b) {
  return a % b ? gcd(b, a%b) : b
}

function solution(num) {
 return num.reduce((a,b) => a*b / gcd(a,b))  
}
```