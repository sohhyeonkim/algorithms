<a href="https://school.programmers.co.kr/learn/courses/30/lessons/120876">
  겹치는 선분의 길이
</a>;

// 다른 분의 풀이
function solution(lines) {
  const array = new Array(200).fill(0); // 선분 좌표의 범위가 -100부터 100이므로 길이가 200인 배열을 만든다.
  let answer = 0;

  lines.forEach(([left, right]) => {
    for (let i = left; i < right; i++) {
      array[i + 100]++;
      if (arr[i + 100] === 2) {
        // 한 번만 겹친 경우에만 +1을 해준다.
        answer++;
      }
    }
  });

  return answer;
}

// 다른 분의 풀이
function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0); // lines를 돌면서 한 번이라도 겹치는 것으로 체크됐으면 +1 해준다. (reduce로 반복문을 한 번 더 실행해야한다.)
}
