let text = ""
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]

// text += `cars[0]<br>`
// console.log(text)
// document.getElementById("result").innerHTML=text
// text += `cars[1]<br>`
// console.log(text)
// document.getElementById("result").innerHTML=text
// text += `cars[2]<br>`
// console.log(text)
// document.getElementById("result").innerHTML=text
// text += `cars[3]<br>`
// console.log(text)
// document.getElementById("result").innerHTML=text
// text += `cars[4]<br>`
// console.log(text)
// document.getElementById("result").innerHTML=text
// text += `cars[5]<br>`
// console.log(text)
// document.getElementById("result").innerHTML=text
// text += `cars[6]<br>`
// console.log(text)
// document.getElementById("result").innerHTML=text

// for (초기값; 실행; 증감값) { }

for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

document.getElementById("result").innerHTML = text;