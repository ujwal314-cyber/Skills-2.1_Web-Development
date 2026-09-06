const express=require('express')
const app=express()
const port=3000

app.set('view engine','ejs')//you are setting the view engine to ejs

app.get('/',(req,res)=>{
    let siteName="Adidas"
    let search="Search Now"
    // res.sendFile("views/index.html",{root:__dirname})
    res.render('index',{siteName,search})//this is same as { siteName: 'Adidas', search: 'Search Now' }
})

app.listen(port,()=>{
    console.log("Listening at 3000");
})