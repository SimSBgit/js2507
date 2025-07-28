var r = document.getElementById("result");
let num1 = 8;
let num2 = 3;
let result = 0;

result = num1 + num2;

console.log(`${result}`)
r.innerHTML = `<h1>[더하기+ ] ${result}</h1>`;

result = 0;

result = num1 - num2;
console.log(`${result}`)
r.innerHTML = r.innerHTML + `<h1>[빼기-] ${result}</h1>`;


result = 0;

result = num1 * num2;
console.log(`${result}`)
r.innerHTML = r.innerHTML + `<h1>[곱셈* ] ${result}</h1>`;


result = 0;

result = num1 / num2;
console.log(`${result}`)
r.innerHTML = r.innerHTML + `<h1>[나누기/ ] ${result}</h1>`;


result = 0;

result = num1 % num2;
console.log(`${result}`)
r.innerHTML = r.innerHTML + `<h1>[나머지% ] ${result}</h1>`;

result = 0;

result = ++num1
console.log(`${result}`)
r.innerHTML = r.innerHTML + `<h1>[++1씩증가 ] ${result}</h1>`;

result = 0;

result = --num2
console.log(`${result}`)
r.innerHTML = r.innerHTML + `<h1>[--1씩감소 ] ${result}</h1>`;

result = 0;
let num0 = 7;

result = num0++
console.log(`${result}`)
r.innerHTML = r.innerHTML + `<h1>[1씩증가++ ] ${result}</h1>`;
r.innerHTML = r.innerHTML + `<h1>[1씩증가++ ] ${num0}</h1>`;

result = 0;
let num00 = 7;

result = num00--
console.log(`${result}`)
r.innerHTML = r.innerHTML + `<h1>[1씩감소--] ${result}</h1>`;
r.innerHTML = r.innerHTML + `<h1>[1씩증가++ ] ${num00}</h1>`;