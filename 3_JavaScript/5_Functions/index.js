function sum(a,b,c=0){
    console.log(a,b,c)
    return a+b+c;
}

console.log(sum(12,23));
console.log(sum(12,23,78));
console.log(sum(12));//returns NaN (Not a Number) when you do not pass a argument which is required and undefined is passed instead of that


let mul=(a=0,b=0)=>{//arrow fuunction here mul is a function also and a vaiable also
    return a*b;
}

console.log(mul(10,7));