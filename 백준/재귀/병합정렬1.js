const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const filePath = './input.txt';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '))
  .flat()
  .map((el) => +el);

const N = +input.shift();
const K = +input.shift();
const arr = [...input];

const temp = [];
let answer = -1;
let count = 0;

const merge = (arr, p, q, r) => {
  let i = p;
  let j = q + 1;
  let t = 1;

  while (i <= q && j <= r) {
    if (arr[i] <= arr[j]) {
      temp[t++] = arr[i++];
    } else {
      temp[t++] = arr[j++];
    }
  }

  while (i <= q) {
    temp[t++] = arr[i++];
  }

  while (j <= r) {
    temp[t++] = arr[j++];
  }

  i = p;
  t = 1;
  while (i <= r) {
    arr[i++] = temp[t++];
    count++;
    if (count === K) {
      answer = arr[i - 1];
      break;
    }
  }
};

const mergeSort = (arr, p, r) => {
  if (p < r) {
    const q = parseInt((p + r) / 2, 10);

    mergeSort(arr, p, q);
    mergeSort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
  return arr;
};

mergeSort(arr, 0, N - 1);

console.log(answer);
