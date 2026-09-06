import mongoose, { get, set } from "mongoose";
import express from 'express';
import { Todo } from "./models/todo.js";

const app =express()
const port=3000

let connect= await mongoose.connect('mongodb://localhost:27017/todos')//todos will be the db name

app.use(express.static('public'))

app.get('/',(req,res)=>{
    // const todo =new Todo({title:"1st todo",desc:"This is a todo",status:false})
    const todo =new Todo({title:1,desc:"This is a todo",status:false,days:7})//even if its a number it will be inserted but it will be converted into a string and then inserted same applies for objects and arrays converted into a string and then inserted
    //but if at all days is a string then the mongoose will not add it and the app will crash
    todo.save()
    res.send("Hello World")
})


app.get('/json', async(req,res)=>{
    let todo= await Todo.findOne({})
    res.json({entire:todo,title:todo.title,desc:todo.desc});
})



app.listen(port,()=>{
    console.log(`Listening at ${port}`)
})
