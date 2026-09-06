// let boxes=document.getElementsByClassName("box")//now using this boxes variable you cs=an target the elements with box name box

// boxes[2].style.backgroundColor="aqua"

// document.getElementById("#123").style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor="red" //Selects the first element with this selector (here box1)

// document.querySelectorAll('.box').style.backgroundColor="red" this doesnt work as this returns a node list

// document.querySelectorAll('.box').forEach(e=>{
//     e.style.backgroundColor="peru"
// })

// console.log(document.getElementsByTagName("div"))//returns all div blocks as a html collection

let e=document.querySelector(".container").children

// console.log(e[1].matches(".box"))//specify the css selector in the bracket of matches ,returns true or false

// console.log(e[3].closest(".box"))//returns the closest (next Box4 )element with the class box

// console.log(e[1].closest(".container"))//checks for its neighbouors if not found then checks for its parent then also is not found then checks for its parent's parent and returns if found

console.log(document.querySelector(".container").contains(e[1]))//here it checks whether .container contains e[1] or not if contains then returns true else false