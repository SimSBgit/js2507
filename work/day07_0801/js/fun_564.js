//  var 사용

var seed = 3

for (let i = 1; i <= 5; i++) {
    var seed = 5
    var result = seed * i
    console.log(result)
}

// ---------------------
//  지역 내에서 let으로 재선언 후 전역에서 call > x

var seed2 = 3

for (let j = 1; j <= 5; j++) {
    let seed2 = 5
    let result2 = seed2 * j
}
console.log(seed2)
// console.log(result2)



