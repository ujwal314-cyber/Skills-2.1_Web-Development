let o={
    a:"apple",
    b:"bat"
}//other then these two elements and object will have an additional object element called prototype which stores additional features of the object

console.log(o)

let animal={
    eats:true,
    sleep:true
}

let rabbit={
    jumps:true
}

// now i want add eats true to rabbit also which i can do now but if there are multiple features like eats i cant sit adding each feature so instead i can append it to the rabbit prototype

rabbit.__proto__=animal
console.log(rabbit.eats,rabbit.sleep)//this will give true now and not undefined

//prototype is an additional properties of an object

// here you have only one animal rabbit but if you have multiple animals then- this is when class comes into picture