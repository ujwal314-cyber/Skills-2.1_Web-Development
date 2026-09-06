async function demo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// let a = await demo()//This will give an error as this is not inside an async function but everytime you have to create a main function and again you have to call it so you use IIFE(Immediately Invoked Function Expresion) where it is automatically involed no need to call it separately
// console.log(a)

(async function main() {
    let a = await demo()
    console.log(a)
})()// => IIFE