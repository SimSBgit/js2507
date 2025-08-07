const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    eyescolor: "brown"
}

const person2 = {
    firstName: "길동",
    lastName: "홍",
    age: 500,
    eyescolor: "blue"
}

// 기존 객체
const person3 = {
    firstName: "길동1",
    lastName: "홍1",
    age: 600,
    eyescolor: "blue1"
}
// New 객체
const man = Object.create(person3)
man.firstName = "원빈"
man.weight = 70

const fruits = [
    ["apple", 300],
    ["pears", 900],
    ["banana", 500]
]

const myObj = Object.fromEntries(fruits)
myObj.weight = 100

// document.getElementById("demo").innerHTML = myObj.pears

const woman1 = {firstName: "Gil-dong", lastName: "Hong"}
const woman2 = {weight: 45, height: 165}

// woman1의 프로퍼티로 person1프로퍼티를 같은 프로퍼티는 덮어쓰고,
Object.assign(person1, woman1)

let text = Object.entries(person1)
document.getElementById("demo").innerHTML = text;

// 새로운 프로퍼티는 추가한다.
Object.assign(person1, woman2)

let text1 = Object.entries(person1)
document.getElementById("demo1").innerHTML = text1

// 객체공장 : 클래스가 객체를 만들어낼 때의 생성자 함수 = Person0
function Person0(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyescolor = eye;
}

const myFather = new Person0("John", "Doe");
document.getElementById("demo2").innerHTML = myFather.firstName + " " + myFather.age

function Book(tit, ind, sub, price) {
    this.title = tit
    this.index = ind
    this.subtitle = sub
    this.price = price
}

const book1 = new Book("JS", "반갑습니다.", "Object", "60000")
document.getElementById("demo3").innerHTML = book1.title + book1.index + book1.subtitle + book1.price






