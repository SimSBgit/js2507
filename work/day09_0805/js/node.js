// document.getElementById("id2").innerHTML = document.getElementById("id1").innerHTML;
// -------- 예제1

const para = document.createElement("p");
const node = document.createTextNode("This is new");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);

// -------- 예제2

const para1 = document.createElement("p");
const node1 = document.createTextNode("This is new");
para1.appendChild(node1);

const element1 = document.getElementById("div2");
const child = document.getElementById("p3")
element1.insertBefore(para1,child)

// ------- 예제3

function myFunc() {
    document.getElementById("p1").remove()
}

// ------ 예제4

const parent = document.getElementById("div3")
const child1 = document.getElementById("p5")

parent.removeChild(child1)

// ------ 예제5

const parent1 = document.getElementById("div4")
const child2 = document.getElementById("p7")

const para2 = document.createElement("p")
const node2 = document.createTextNode("This is new.")

para2.appendChild(node2)
parent1.replaceChild(para2,child2)

