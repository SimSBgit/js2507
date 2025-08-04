let a = ['홍', '길', '동']
let b = ['고객님', '안녕하십니까']

let ab = a.concat(b)

document.getElementById("result").innerHTML = `${ab[0]}${ab[1]}${ab[2]} ${ab[3]} ${ab[4]}`

// 2. join : "*_*_*고객님 안녕하십니까"
let string = a.join('_')

document.getElementById("result1").innerHTML=`${string} ${b[0]} ${b[1]}`

// 3. push : "*_*_*_고객님 안녕하십니까!"
b.push("!")
document.getElementById("result2").innerHTML=`${string} ${b[0]} ${b[1]}${b[2]}`

// 4. unshift : "수원역지점 *_*_*_고객님 안녕하십니까!"
b.unshift("수원역지점 ")
document.getElementById("result3").innerHTML=`${b[0]}${string} ${b[1]} ${b[2]}${b[3]}`

// 5. pop : "수원역지점 *_*_*_고객님 안녕하십니까"
b.pop(1)
document.getElementById("result4").innerHTML=`${b[0]}${string} ${b[1]} ${b[2]}`

// 6. shift : "*_*_*_고객님 안녕하십니까"
b.shift(1)
document.getElementById("result5").innerHTML=`${string} ${b[0]} ${b[1]} `

// 7. splice : "*_*_*_고객님 오늘도 좋은하루 안녕하십니까"
b.splice(1, 0, "오늘도", "좋은 하루")
document.getElementById("result6").innerHTML=`${string} ${b[0]} ${b[1]} ${b[2]} ${b[3]}`

// 8. slice : "*_*_*_"
document.getElementById("result7").innerHTML=`${string}`

