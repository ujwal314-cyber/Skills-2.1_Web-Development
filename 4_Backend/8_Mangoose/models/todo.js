import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title:String,
    desc:String,
    status:Boolean,
    days:Number,
    example : {type:String,required:true,default:"Username"}//this says that the type is string and this is required and the default value will be taken if the field is not provided
})

//this is the advantage of mongoose you can define how the data is stored directly like here title can have only string and cannot be a number, therefore it makes inducing security easy

//but the same task with mongodb you would have to write if else statements and your code will be filled with if else statements, so mongoose makes it easy

export const Todo = mongoose.model('List',TodoSchema)//lists (not list and not capital) will be the colllection name 