const express=require("express")
const app=express()
const port=3000

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send("Hello World")
    console.log("GET request");
})

//wt ever you type in the browser or wtever the browser sends to the backend by default is a get request

//the problem with get is that

//*you cant send sensitive info using get as it will apppear in logs like you want to login and u send /login?username=inkjbndfsds&password=122345 and you are sending this as a get request and it appears in logs 

//* There is a size limit for get where you can send a max of 2048 characters or 8KB

app.post('/',(req,res)=>{
    console.log("Request recieved successfully");
    res.send("Post request was recieved successfully")
    console.log("Responded for the post request");
})

//similarly you can write for put request or delete request

//and you can club 2 or more requests like below
// app.get('/',(req,res)=>{
//     res.send("Hello World")
//     console.log("GET request");
// }).post('/',(req,res)=>{
//     console.log("Request recieved successfully");
//     res.send("Post request was recieved successfully")
//     console.log("Responded for the post request");
// })

//for testing post requests creating html files everytime is a bit messy so use postman for testing where you can test all types of requests 

app.listen(port,()=>{
    console.log(`listening at ${port}`);
})





// API (APPLICATION PROGRAMMING INTERFACE) - FULL SUMMARY
//
// 1. WHAT IS AN API?
// - API is a server-side route system that allows communication between client and server
// - It consists of endpoint + HTTP method + logic + response
//
// 2. HOW IT WORKS (FLOW)
// - Client (browser) sends request (GET/POST/etc.)
// - Server receives request using Express route (app.get/app.post)
// - Server executes logic inside route handler
// - Server sends response back using res.send/res.json
// - Client receives and uses the response
//
// 3. API STRUCTURE IN EXPRESS
// - app.get('/route', handler)   → GET API
// - app.post('/route', handler)  → POST API
// - app.put('/route', handler)   → PUT API
// - app.delete('/route', handler) → DELETE API
//
// 4. PARTS OF AN API
// - Endpoint (URL like /users)
// - Method (GET, POST, etc.)
// - Request (data sent by client)
// - Logic (code inside route)
// - Response (res.send / res.json)
//
// 5. IMPORTANT POINTS
// - GET → fetch data
// - POST → send data
// - PUT → replace data
// - PATCH → update partial data
// - DELETE → remove data
//
// 6. KEY UNDERSTANDING
// - API is NOT the request
// - API is NOT the response
// - API is the SERVER ROUTE that handles requests and sends responses
//
// 7. EXAMPLE
//
// app.get('/about', (req, res) => {
//     res.send("About page")
// })
//
// → This entire block is an API endpoint

// So when you type localhost:3000/about => this is a request sent to a api

//api recieves it at 
// app.get('/app',.....)
// and the api sends back the response