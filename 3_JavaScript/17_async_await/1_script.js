// function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }

// console.log("Loading modules");
// console.log("Load data");

// let data=getdata()
// //the below one will not wait for the promise to be fulfilled the promise will be displayed pending but the below one will be already executed if you want the below one to be executed after the promise is fullfilled then one way is using then
// // data.then(()=>{

// //     console.log(data);
// //     console.log("Printing modules");
// // })

// //but this will become a callback approach another way is to use async and await

// //for using async and await the code you want to delay should be inside a async function and the function should also be a async function
//there is no need that the function should also be async


// function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }

async function getdata() {
    // let x=fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    // let x= fetch('https://jsonplaceholder.typicode.com/todos/1') if you do not put await then the below one which is data=x,json() here x is storing nothing, as fetch takes time js skips it and goes to next

    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let data = await x.json() // similarly here also if await is not used data will be returned before the data is parsed and converted into json

    //x doesnt store the data it just stores the request and its status so x must be parsed and converted into a suitable format may it be json , txt

    // let data = await x.text();

    return data
}

async function main() {
    console.log("Loading Modules.............");
    let data = await getdata();//if here await is not written then Promise{pending} will be printed as the promise is not settled still, if await is written then the returned value from the promise is printed as the lines are executed only after the promise is settled
    console.log(data);
    console.log("Processing data");
}

main()

// the async getdata fuction is in overall returning a promise

// settled means resolved or reject
//resolve means the promise has settled successfully
// reject means the promise has not settled successfully