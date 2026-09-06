let o={
    name:"Ram",
    "job code":5627// name also can be written in Double quotes but the fact that job code is written in double quotes is that it has a space
}

console.log(o,typeof o);

o.address="Bengaluru";

// o."job salary"=12345; is not valid
o["job salary"]=120000;
console.log(o)

o["job salary"]="1cr";
console.log(o)

// in object the values are stored as key value pairs where the value can be of any data type even an object or a function