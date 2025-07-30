let text = ""
let myRandom = Math.random()

console.log(myRandom)

if (myRandom < 0.5) {
    text = "0.5보다 작다";
} else {
    text = "0.5보다 작지 않다";
}
document.getElementById("result").innerHTML=`<h1>결과는: ${text}</h1>`
