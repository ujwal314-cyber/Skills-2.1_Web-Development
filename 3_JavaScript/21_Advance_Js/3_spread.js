function sum(a,b,c){
    return a+b+c
}

let a=[1,2,4]
console.log(a[0]+a[1]+a[2])
console.log(sum(a[0],a[1],a[2]))
console.log(sum(...a))//easy way '...' is called the spread operator it opens the array (here)
//...a returns {0:1,1:2,2:4}
console.log(...a)