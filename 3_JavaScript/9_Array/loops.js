arr=[1,2,3,4,5];

arr.forEach((value,index,array) => {
    console.log(value,index,array)
});

arr.forEach((v,i)=>{
    console.log(v,i);
})

for (const element of arr) {
    console.log(element);
}