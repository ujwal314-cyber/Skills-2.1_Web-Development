/*

Adjectives:
Crazy
Amazing
Fire

name:
Engine
Foods
Garments

Word:
Bros
Limited
Hub
 */

let adj={
    1:"Crazy ",
    2:"Amazing ",
    3:"Fire "
}

let n={
    1:"Engine ",
    2:"Foods ",
    3:"Garments "
}

let word={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}

let choice={
    1:adj,
    2:n,
    3:word
}

b_name=""

for (const key in choice) {
    r=Math.floor(Math.random()*3+1)
    b_name+=choice[key][r];
}

console.log(b_name)