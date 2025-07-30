let i, len, text;
const cars = ["BMW", "Volvo", "Saab", "Ford"];

for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

document.getElementById("result").innerHTML=text;

// --------------------------------------

for (i=0, len=cars.length, text=""; i < len; i++) {
    text += cars[i] + "<br>";
}

document.getElementById("result2").innerHTML=text

// -----------------------------------------

for (; i < len;) {
    text += cars[i] + "<br>";
    i++;
}

document.getElementById("result3").innerHTML=text;

// --------------------------------------------

var z = 5;
for (var z = 0; z < 10; z++) {

}

document.getElementById("result4").innerHTML=z;

// ------------------------------------------------

let x = 5;
for (let x = 0; x < 10; x++) {

}

document.getElementById("result5").innerHTML=x;

// --------------------------------------------------

// JavaScript has 8 Datatypes

// String = 문자열
// Number = 숫자
// Bigint
// Boolean = true or false
// Undefined = 정의 x
// Null = 값이 없음
// Symbol
// Object = 객체 {} / array object = [] / Date object = New Date()

// 내장 객체 = objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, etc

// ----------------------------------------

let y = 16 + 4 + "Hello";
document.getElementById("result6").innerHTML=y;


// ----------------------------------------

let v = "Hello" + 16 + 4;
document.getElementById("result7").innerHTML=v;

// ------------------------------------------

let a;
a = 5;
a = "john";

document.getElementById("result8").innerHTML=a;

// ---------------------------------------------

let b = 123e5;
let c = 123e-5;

document.getElementById("result9").innerHTML=b + "<br>" + c


