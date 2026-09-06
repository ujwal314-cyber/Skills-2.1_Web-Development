let a=6;

// function fact(n){
//     let arr=Array.from(Array(n).keys());
//     arr=arr.map(e=>{
//         return e+1;
//     })
//     return arr.reduce((a,b)=>{
//         return a*b;
//     })
// }

function fact(n){
    let arr=Array.from(Array(n+1).keys());
    
    return arr.slice(1).reduce((a,b)=> a*b)//Arrow function shortcut writing without {} returns a*b
}

console.log(fact(5))