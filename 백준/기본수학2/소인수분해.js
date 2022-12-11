const fs = require('fs');
const filePath = './input.txt';
let number = parseInt(fs.readFileSync(filePath).toString());

console.log(number);

let primes = [];
let divider = 2;

while (true) {
  if (number % divider == 0) {
    primes.push(divider);
    number = number / divider;
    divider = 1;
  }
  if (number === 1) {
    break;
  }
  divider++;
}
for (let i = 0; i < primes.length; i++) {
  console.log(primes[i]);
}
