//1

const arr = [1, 6, -1, 22, 13];

const max = Math.max(...arr);
const min = Math.min(...arr);

console.log(max); // 22
console.log(min); // -1

//2

const str = "!тевирП";

const reversedStr = str.split('').reverse().join('');

console.log(reversedStr); // "Привет!"

//3

const str = prompt('Введите строку:');
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

//4

const arr = [3, 5, 8, 13, 21, 42];

const sumOfSquares = arr
  .filter(num => num % 2 === 0)
  .reduce((sum, num) => sum + Math.sqrt(num), 0);

console.log(sumOfSquares); // 9.848857801796104

//5

function anagram(str1, str2) {
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  
  return sortedStr1 === sortedStr2;
}

console.log(anagram("Лунь", "нуль")); // true
console.log(anagram("Лунь", "ноль")); // false

//6

function palindrome(str) {
  const formattedStr = str.toLowerCase().replace(/\s/g, '');
  const reversedStr = formattedStr.split('').reverse().join('');
  
  return formattedStr === reversedStr;
}

console.log(palindrome("Не гни папин ген")); // true
console.log(palindrome("123")); // false

//7

function fibonacci() {
  let a = 0;
  let b = 1;
  
  function fib() {
    console.log(a);
    const next = a + b;
    a = b;
    b = next;
  }
  
  return setInterval(fib, 1000);
}

fibonacci();

//8

function delay(N) {
  return new Promise(resolve => {
    setTimeout(resolve, N * 1000);
  });
}

delay(3).then(() => console.log("Resolved after 3 seconds"));

//9

function intersect(arrA, arrB) {
  return arrA.filter(item => arrB.includes(item));
}

console.log(intersect([1, 2, 3], [2, 3, 4])); // [2, 3]

//10

HTML:

<div>
  <button id="plus">+</button>
  <span id="value">0</span>
  <button id="minus">-</button>
</div>

JS:

const valueEl = document.getElementById('value');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');

let value = 0;

plusBtn.addEventListener('click', () => {
  value++;
  valueEl.textContent = value;
});

minusBtn.addEventListener('click', () => {
  value--;
  valueEl.textContent = value;
});

11

for(let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}