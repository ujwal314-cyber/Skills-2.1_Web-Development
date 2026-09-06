r=Math.random();
console.log(r)

let a=prompt("Enter the number 1");
let o=prompt("Enter the operation");
let b=prompt("Enter the number 2");

let op={
    "+":"-",
    "-":"/",
    '*':'+',
    '/':'**',
    '%':'*',
    '**':'%'
}



if(r>0.1){
    alert(eval(`${a} ${o} ${b}`))
}

else {
    o=op[o];
    alert(eval(`${a} ${o} ${b}`))
}