//you are creating a hell number of api endpoints now like ex
// /lang this has some 10 further endpoints including all those in one makes is messy so we use router so that u can define all the endpoints of lang in one folder(lang.js) and then you can import those into your main file

const express=require('express')
const app=express()
const lang=require('./routes/lang')

app.use('/lang',lang)//so now all the requests to the endpoint /lang will be handeled by land
//similarly you can create as many folders and access like this

app.get('/',(req,res)=>{
    res.send("Welcome to main")
})

app.listen(3000,()=>{
    console.log("Listening at 3000");
})