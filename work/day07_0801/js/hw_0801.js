// 예제1

let myFunc = function(a, b) {return a * b};
let result = myFunc(4, 3);

document.getElementById("demo").innerHTML=result;

// 예제2

let text = "Outside: " + typeof carName
document.getElementById("demo1").innerHTML=text

function myF() {
    let carName = "Volvo"
    let text = "Inside: " + typeof carName + " " + carName
    document.getElementById("demo2").innerHTML = text
}

myF();

// 예제3

function greet(name, age) {
    return "Hello " + name + "! You are " + age + " years old."
}

document.getElementById("demo3").innerHTML = greet("John", 21)

// 예제4

// 화살표 함수선언
myFunction = (c, d) => c * d

let result1 = myFunction(4, 5)
document.getElementById("demo4").innerHTML=result1

// 예제5

let text1 = "The temperature is " + toCelsius(77) + " Celsius"
document.getElementById("demo5").innerHTML = text1

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32)
}

// w3 객체 예제


let car = "fiat"
document.getElementById("demo6").innerHTML = "Car: " + car;

// 여러 값을 담은 객체
const car1 = {type:"Fiat", model:"500", color:"white"};
document.getElementById("demo7").innerHTML = "The car type is " +car1.type;

// const로 객체 선언하는 것이 일반적


