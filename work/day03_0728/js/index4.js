
let num1 = 3;
let num2 = 5;
let result;

result = num1 + num2
document.getElementById("result1").innerHTML=`<b>덧셈:${result}</b>`

result = num2 - num1
document.getElementById("result2").innerHTML=`<b>뺄셈:${result}</b>`

result = num2 * num1
document.getElementById("result3").innerHTML=`<b>곱셈:${result}</b>`

result = (num2 / num1).toFixed(2)
document.getElementById("result4").innerHTML=`<b>나눗셈:${result}</b>`

result = num2 % num1
document.getElementById("result5").innerHTML=`<b>나머지:${result}</b>`

// 선언부
let num01 = 10; let num02 = 10; let num03 = 10; let num04 = 10;

result = ++num01
document.getElementById("result6").innerHTML=`<b>결과는${result}</b>, 변수는 <i>${num01}</i>`

result = num02++
document.getElementById("result7").innerHTML=`<b>결과는${result}</b>, 변수는 <i>${num02}</i>`

result = --num03
document.getElementById("result8").innerHTML=`<b>결과는${result}</b>, 변수는 <i>${num03}</i>`

result = num04--
document.getElementById("result9").innerHTML=`<b>결과는${result}</b>, 변수는 <i>${num04}</i>`

