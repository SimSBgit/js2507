
const myP = document.createElement("p")
const text = document.createTextNode("노드로 생성한 텍스트")
myP.appendChild(text)

const element = document.getElementById("div1")
element.appendChild(myP)

// ------------------------

const newDiv = document.createElement("div")
// newDiv.setAttribute("id","myID")
newDiv.id = "myID"
document.body.appendChild(newDiv)

const text3 = document.createTextNode("노드로 만든 div")
newDiv.appendChild(text3)

const p3 = document.createElement("p")
const p4 = document.createElement("p")

const text1 = document.createTextNode("노드로 만든 문단3")
const text2 = document.createTextNode("노드로 만든 문단4")

p3.appendChild(text1)
p4.appendChild(text2)

p3.className = "myclass"
p4.className = "myclass"

const conDiv = document.getElementById("myID")

conDiv.appendChild(p3)
conDiv.appendChild(p4)



// ------------------------

