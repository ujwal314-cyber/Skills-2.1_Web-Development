console.log(document.body)
console.log(document.body.childNodes) 
console.log(document.body.childNodes[0]) 
console.log(document.body.childNodes[1]) //Text aooears because the space given in the form of indetation is considered as a text node
//If a comment is there then a comment node also appears

console.log(document.body.childNodes[1].childNodes) 

let cont=document.body.childNodes[1];//now cont is the container

console.log(cont.lastChild)
console.log(cont.firstChild)//All these are text childs if you want to access the first box then

console.log(cont.firstElementChild)//Elements refer to html elements

//Note: text is a child but not a element 

cont.lastElementChild.style.backgroundColor="red"

console.log(cont.lastElementChild.parentElement)

console.log(cont.children)//Gives only element nodes
console.log(cont.children[1])//gives Box2

console.log(cont.children[1].nextElementSibling)//gives Box3
console.log(cont.children[1].previousElementSibling)//gives Box1

