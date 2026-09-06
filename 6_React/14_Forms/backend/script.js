import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';// not required express parser does the work
const app =express()
const port=3000

app.use(express.static('public'))
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})


app.listen(port,()=>{
    console.log(`Listening at ${port}`)
})