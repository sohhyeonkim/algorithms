// 나의 풀이
function solution1(my_string) {
  const numbers = [];
  for(const el of my_string) {
      if(!Number.isNaN(Number(el))){
          numbers.push(Number(el));
      }  
  }
  return numbers.sort((a,b) => a-b)
}

// 다른 사람 풀이
function solution2(my_string) {
  return my_string.split('').filter((el) => !isNaN(el)).map((el) => Number(el)).sort((a,b) => a-b);
}

// 다른 사람 풀이
function solution3(my_string) {
  return my_string.match(/\d/g).map((el) => Number(el)).sort((a,b) => a-b);
}
