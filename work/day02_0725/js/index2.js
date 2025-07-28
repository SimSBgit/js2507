let num1 = 5;
let result = 0;
// 할당연산자
// 대입연산자

result = num1;
console.log(`[기본=대입연산자] ${result}`);
console.log("결과보기:문자연결연산자 사용---"+result);
// 누적+=대입연산자
// result = result + num1
result += num1;
console.log(`[누적+=대입연산자]${result}`);

// -=연산자
// result = result - num1
result -= num1;
console.log(`[-=대입연산자]${result}`);

// *=연산자
// result = result * num1
result *= num1;
console.log(`${result}`)

// /=연산자
// result = result / num1
result /= num1;
console.log(`${result}`)

// %=연산자
// result = result / num1의 나머지
result %= num1;
console.log(`${result}`)