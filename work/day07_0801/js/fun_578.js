// 화살표 함수
// const hi1 = function() {
//     return "안녕하세요?"
// };

// 1. 매개변수가 없는 경우
// 중괄호 표기
const hi1 = () => { return "안녕하세요?"};
console.log(hi1)

// 중괄호 생략
const hi2 = () => "안녕하세요?"
console.log(hi2)

// 2. 매개변수가 1개인 경우
// let hi3 = function(user) {
//     document.writeln(user + "님, 안녕하세요?")
// }

let hi3 = user => { document.writeln(`${user}님, 안녕하세요?`)};
console.log(hi3)

// 3. 매개변수가 2개 이상인 경우
// let sum = function(a, b) {
//     return a + b
// };

let sum = (a, b) => a + b;