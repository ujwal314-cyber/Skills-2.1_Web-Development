const express = require('express')
const app=express()

// app.use((req,res,next)=>{
//     console.log("M1 done");//middleware is a function that takes in request, response and next and processes the request(may or may not) 
//     next()//without next() the request will not go forward 
//     //for ex you didnot write next the middleware will recieve the request processes it and then it will be there only it wont g further in the code and browser will be roaming waiting for the respose for the request
// })

// const myLogger =(req,res,next)=>{
//     console.log("M2 done");
//     next()
// }

// app.use(myLogger)//middleware can also be written like this

// // app.use((req,res,next)=>{
// //     console.log("M3 done")
// //     res.send("Ends here")//if at all you do res.send here only then there is no use of next once responded the request is done and an error will be displayed if next() is there
// //     next()
// // })

//middleware are used for storing logs 

//ex
const fs=require('fs')
app.use((req,res,next)=>{
    // console.log(`Time - ${Date.now()} Type - ${req.method}`)//the date must be converted

    fs.appendFileSync('./logs.txt',`Time - ${(new Date(Date.now())).toLocaleString()} Type - ${req.method}\n`)

    console.log(`Time - ${(new Date(Date.now())).toLocaleString()} Type - ${req.method}`)//this can be stored in a file also
    next()
})

app
app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(3000,()=>{
    console.log("Listening at 3000");
})

//Checkout expressjs.com for more info