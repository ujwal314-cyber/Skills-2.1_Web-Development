const fs=require("fs")

// console.log(fs)

//=> fs.write

// console.log("starting");
// fs.writeFileSync("file.txt","HEllofdgbc world")//creates a file by blocking code and once done moves further(synchronously)
// console.log("ending");

// console.log("\n\n")

// console.log("starting");
// fs.writeFile("file2.txt","Hello world",()=>{
//     console.log("Done")//.writeFile throws an error without a callback function TypeError cb
// })//works asynchronously
// console.log("ending");

//use .writeFile



//=> .read

// fs.writeFile("file2.txt","Hello world",()=>{
//     console.log("Done")
//     fs.readFile("file2.txt",(error,data)=>{
//         console.log(error)
//         console.log(data);
//     })
// })

//in the above one you will get error as null but 
//data you will get <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64> so you should convert it into string to make it readable

// fs.writeFile("file2.txt","Hello world",()=>{
//     console.log("Done")
//     fs.readFile("file2.txt",(error,data)=>{
//         console.log(error)
//         console.log(data.toString());
//     })
// })


//=>.append

fs.appendFile("append.txt","Adds content",(e,d)=>{
    // console.log(e)
    console.log(d)//it just appends at the end of the last line but it does not read data so this will give undefined
})