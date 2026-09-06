let arr=[1,2,3,4,5];

// map
console.log("Map")
let newarr=arr.map(e=>{//or arr.map((e,index,array)=>{})
    return e**2;
})
console.log(newarr);

// Filter
console.log("\n\nFilter")

// const greterthan7=(e)=>{
//     if(e>7) return true;
//     return false;
// }

// console.log(newarr.filter(greterthan7)); or

console.log(newarr.filter(e=>{
    if(e>7) return 1;
    return 0;
}))


// Reduce

console.log("\n\nReduce");

arr=[1,2,3,4,5];

console.log(arr.reduce((a,b)=>{
    return a*b;
}))
console.log(arr.reduce((a,b,c)=>{
    return a*b*c;
}))
console.log(arr.reduce((a,b,c,d)=>{
    return a*b*c*d;
}))
console.log(arr.reduce((a,b,c,d,e)=>{
    return a*b*c*d*e;
}))

/* 
EXPLANATION OF reduce() WITH MULTIPLE PARAMETERS
================================================

arr = [1,2,3,4,5];

The reduce() callback receives exactly 4 arguments:
1. Accumulator - the accumulated result
2. Current Value - current array element
3. Current Index - position in array
4. Array - the original array

---

FIRST REDUCE (2 parameters: a, b)
----------------------------------
arr.reduce((a,b) => a*b)
Output: 120 ✅

- a = accumulator, b = current value
- Iteration:
  - 1st: a=1, b=2 → 1×2 = 2
  - 2nd: a=2, b=3 → 2×3 = 6
  - 3rd: a=6, b=4 → 6×4 = 24
  - 4th: a=24, b=5 → 24×5 = 120

---

SECOND REDUCE (3 parameters: a, b, c)
--------------------------------------
arr.reduce((a,b,c) => a*b*c)
Output: 2880 ✅

- a = accumulator
- b = current value  
- c = current index

- Iteration:
  - 1st: a=1, b=2, c=1 → 1×2×1 = 2
  - 2nd: a=2, b=3, c=2 → 2×3×2 = 12
  - 3rd: a=12, b=4, c=3 → 12×4×3 = 144
  - 4th: a=144, b=5, c=4 → 144×5×4 = 2880

Note: First iteration starts at index 1 because reduce uses arr[0] as initial accumulator

---

THIRD REDUCE (4 parameters: a, b, c, d)
----------------------------------------
arr.reduce((a,b,c,d) => a*b*c*d)
Output: NaN ✅

- a = accumulator
- b = current value
- c = current index
- d = entire array [1,2,3,4,5]

- Multiplying a number by an array gives NaN
- Example: 1 × 2 × 1 × [1,2,3,4,5] = NaN

---

FOURTH REDUCE (5 parameters: a, b, c, d, e)
--------------------------------------------
arr.reduce((a,b,c,d,e) => a*b*c*d*e)
Output: NaN ✅

- Same reason - multiplying by the array → NaN
- e is undefined (reduce only passes 4 arguments max)

---

KEY TAKEAWAY:
Only the first reduce works as intended for multiplication.
Others include index/array which cause unexpected results!
*/


console.log(Array.from("Hello123"));
console.log(Array.from(123456));//cant be formed = []

let o={
    1:'a',
    2:'b',
    3:'c'
}
console.log(Array.from(o));//cant be formed = []