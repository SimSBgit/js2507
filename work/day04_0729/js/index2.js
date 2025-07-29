// 선언부
let num1, num2, result;

num1 = 5; num2 = 10; result = 0;
num9 = 10;

// 구현부
result = num1 + num2;
console.log("더하기: " + result)

result = num2 - num1;
console.log("빼기: " + result)

result = num1 * num1;
console.log("곱하기: " + result)

result = num2 / num1;
console.log("나누기: " + result)

result = num2 % num1;
console.log("나머지: " + result)

// ++, --, 선행, 후행

result = ++num9
console.log(`++선행 결과는 ${result}이고, 변수값은 ${num9}이다.`)

result = num9++
console.log(`후행++ 결과는 ${result}이고, 변수값은 ${num9}이다.`)

result = --num9
console.log(`--선행 결과는 ${result}이고, 변수값은 ${num9}이다.`)

result = num9--
console.log(`후행-- 결과는 ${result}이고, 변수값은 ${num9}이다.`)
// 출력부

// -----------------------------------------------------------
// 개인 공간

// let userNumber = parseInt(prompt('숫자를 입력하세요.'));

// if (userNumber % 3 === 0)
//     alert('3의 배수입니다.');
// else
// alert('3의 배수가 아닙니다.')

// let userNumber = prompt('숫자를 입력하세요.');

// if (userNumber !== null) {
//     if (parseInt(userNumber) % 3 === 0)
//         alert('3의 배수입니다.')
//     else
//         alert('3의 배수가 아닙니다.')
// }
// else
//     alert('입력이 취소됐습니다.')

// ----------------------------------------------------------
document.getElementById("result").innerHTML="<h3>"+result+"</h3>"

document.getElementById("result2").innerHTML=`<h3>${num1+num2}</h3>`



