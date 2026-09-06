//in real peojects you wont send normal text but you send html files as reponse to the requests to the api s so

const express=require("express")
const app=express()
const port=3000

app.use(express.static('public'))

app.get('/home',(req,res)=>{
    res.sendFile("templates/index.html",{root:__dirname})
    //without specifing root the browser wont know which templetes/index.html you are referring to so either use the above or mention the entire path
})

// app.get('/home',(req,res)=>{
//     res.json({1:'a',2:'b',3:'c',4:[100,200,300,400]})
// }) this has same endpoint
//so when two have same endpoints only the first ones response will(which comes first in the code) be shown

app.get('/api',(req,res)=>{
    res.json({1:'a',2:'b',3:'c',4:[100,200,300,400],5:{1:100,2:200,3:300}})
})

app.listen(port,()=>{
    console.log(`listening at ${port}`);
})
