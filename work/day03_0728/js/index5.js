let a = 3; let b = 4; 
var result = false;

result = ( 3 == 3 )

console.log( 3 == "3")
document.getElementById("result1").innerHTML= `<b>${result}</b>`

result = ( 3 === "3" )

console.log(3 === "3")
document.getElementById("result2").innerHTML=`<b>${result}</b>`

result = ( 3 != "3" )
console.log(3 != "3")
document.getElementById("result3").innerHTML=`<b>${result}</b>`

result = ( 3 !== "3" )
console.log(3 !== "3")
document.getElementById("result4").innerHTML=`<b>${result}</b>`

result = ( a < b )
console.log(a<b)
document.getElementById("result5").innerHTML=`<b>${result}</b>`

result = ( a > b )
console.log(a>b)
document.getElementById("result6").innerHTML=`<b>${result}</b>`

result = ( a <= b )
console.log(a<=b)
document.getElementById("result7").innerHTML=`<b>${result}</b>`

result = ( a >= b )
console.log(a>=b)
document.getElementById("result8").innerHTML=`<b>${result}</b>`
