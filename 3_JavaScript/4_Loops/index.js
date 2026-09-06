console.log("\n\nfor loop");

for(let i=0;i<5;i++) console.log(i);


console.log("\n\nwhile loop");

let i=10;
while(i<12){
    console.log(i);
    i++;
}


console.log("\n\ndo while loop");

let j=10;
do{
    console.log(j);
    j++;
} while(j==10);


console.log("\n\nfor in loop");

let o={
    1:'a',
    2:'b',
    3:'c',
    4:'d'
}

for (const key in o) {
    console.log(key + " - " + o[key]) 
}


console.log("\n\nfor of loop");

for (const element of "Hello World") { //for iterables only and object is not iterable
    console.log(element)
}