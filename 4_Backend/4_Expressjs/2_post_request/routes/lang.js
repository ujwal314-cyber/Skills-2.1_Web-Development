const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("Welcome to Languages")
})

router.get('/js',(req,res)=>{
    res.send("Welcome to JavaScript")
})

router.get('/py',(req,res)=>{
    res.send("Welcome to Python")
})

router.get('/c',(req,res)=>{
    res.send("Welcome to C")
})

router.get('/cpp',(req,res)=>{
    res.send("Welcome to C++")
})

router.get('/java',(req,res)=>{
    res.send("Welcome to Java")
})

router.get('//:slug',(req,res)=>{
    res.send(`Welcome to ${req.params.slug}`)
})

module.exports=router