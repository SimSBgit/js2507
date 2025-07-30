// if 조건문

let myDate = new Date()
let myHour = myDate.getHours()
let greeting = ""
let timeAM = 9
let timePM = 18

console.log(myDate)
console.log(myHour)

// --------------------------------------

// if (new Date().getHours() < 18) {
//     document.getElementById("result").innerHTML="열공해라!"
// }

if (myHour < timeAM) {
    greeting = "굿모닝! 지각하면 안돼~"
    document.getElementById("result").innerHTML=greeting;
} else if (myHour > timePM) {
    greeting = "수고했어~"
    document.getElementById("result").innerHTML=greeting;

} else {
    greeting = "열공~ 좀 더 힘내~"
    document.getElementById("result").innerHTML=greeting;
}




// else 조건에 해당되지 않으면

// else if 또 다른 조건문

