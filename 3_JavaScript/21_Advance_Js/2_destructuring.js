let [x,y]=[1,5,3]
console.log(x,y);//1 and 5 will be stored in x and y and 7 will be ignored

var [a,b,...r]=[1,2,3,4,5,6,7,8]
console.log(a,b,r);//first two will be stored in a and b and the rest will be stored in the variable written after '...' here r

let o={
    a:10,
    b:23,
    c:45,
    d:67
}

// let {e,n}=o
// console.log(e,n) undefined undefined

var {a,d}=o
console.log(a,d)