var a=23;
var b=45;
console.log(a+b)
        
// Vr is lie a global variable it will be available throughout the program irrespective of where it is declared

var a=100;// var can be redeclared




let c=10;
let d=30;
console.log(c+d);

//let is like local it will be available only in the block where it is declared but if declared ouside all the blocks acts as a global variable

// let d=1000; let cant be redeclared

if(true){
    console.log(c+d);
    let d=1000;//let can be redeclared inside a block
}




const p=3.14;
console.log(p);

p=35;// a const cant be changed this will give an error
console.log(p);


if(true){
    const p=35;
    console.log(p)//a const can also be redeclared inside a block but cant be changed 
    //just p=35 will give an error
}
