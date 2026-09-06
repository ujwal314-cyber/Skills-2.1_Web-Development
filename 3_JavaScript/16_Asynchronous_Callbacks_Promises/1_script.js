console.log("Sentence one")
console.log("Sentence two")

setTimeout(()=>{
    console.log("This is timeout")
})
setTimeout(()=>{
    console.log("This is timeout 2")
})

console.log("The end")

//so normally you would be thinking that first one and two would be executed then timeout 1 ans 2 and at last the end but actually wt happens  is that first one and two will be executed but when it comes to timeout it doesnt delay the execution (if delay is specified) but instead it goes to the next and executes it and then comes to timeout though 0ms delay is specified 
//this is the asynchronous nature of js 

//timeout function executes at last (timeout is a asynchronous function)