// express is used instead of node for web applications because the sam code written below using http would be more complicated but using express makes it simple 
//and security issues along with it

const express = require("express")
const app =express()
const port=3000

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/about',(req,res)=>{
    res.send("This is a sample page")
})

app.get('/contact',(req,res)=>{
    res.send("Ujwal A")
})

app.get('/help',(req,res)=>{
    res.send("there is nothing to help")
})

app.get('/lang',(req,res)=>{
    res.send("Programming languages")
})

// app.get('/lang/js',(req,res)=>{
//     res.send("Java Script")
// })

// app.get('/lang/py',(req,res)=>{
//     // logic to fetch Python from db
//     res.send("Python")
// })
// u acnt sit and make all similar endpoints for all programming langs so use the below

// app.get('/lang/:slug/:second',(req,res)=>{
//     res.send(`Hello this is ${req.params.slug} and ${req.params.second}`);
// })
//when you do this the one you type in the slug in the endpoint will be displayed in the params.slug and the one in the second in the endpoint in the params.second
//and you have to type both slug and second for this to display the given thing
//if you just type /lang/java
//it will display cannot GET java
//if you type /lang/java/python
//it will diplay Hello this is java and python

//req.params = {
//   slug: "js",
//   second: "python"
// } 
//req.params returns a object that contains the root parameters/url parameters slug and second

app.get('/lang/:slug',(req,res)=>{
    res.send(`Hello this is ${req.params.slug}`)
    console.log(req.params)//contains the slug parameter here
    // console.log(req);//this contains many things including params
    console.log(req.query);
    //query is something which you write after ? after the url
    //like ex you write /lang/java?mode=dark&region=in then the req.query will be displayed as
    //{ mode: 'dark', region: 'in' }
}) 

app.listen(port,()=>{
    console.log(`Listening at ${port}`)
})

// Endpoint = URL path (/about)
// Block = Code executed for that endpoint (res.send(...))

// Endpoint = /users
// Block = everything inside { ... }
// Database fetch = db.getUsers() inside the block.

//one more reason why u use express instead of http
//imagine you have a file.txt in your backend folder then the if the backend uses http then you can access the file.txt from the browser by /harry.txt and similarly the user can access the backend file also from the browser then it will be a blunder

//so we use express 
//where the files you want to make public will be saved in separate folder public(can have any name)
//and in your backend you write app.use(express.static('public'(or wtever name you have given)))
//now the user can acccess file.txt by /file.txt only if it is in the public folder

//you can make multiple static directories


//Static files are files that are sent to the browser exactly as they are stored, without any server-side processing.
// Examples:

// HTML files (index.html)
// CSS files (style.css)
// JavaScript files (script.js)
// Images (.png, .jpg, .svg)
// Fonts (.ttf, .woff)