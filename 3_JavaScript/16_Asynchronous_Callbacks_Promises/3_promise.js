let prom1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Hey I am done");
        resolve("Info")//so here first if the timeout is executed succcessfully then the prom1 returns "Info"
        
    },5000)
})

// prom1.then((a)=>{//this means after the prom1 is executed successfully do this a has the return value of prom1
//     console.log(a)
// })//this kind of promise is used when you send a request to a server and after you get the info you display it

let prom2=new Promise((resolve,reject)=>{
    let n=Math.random();
    if(n<0.1){
        reject("Request Timeout")
    }
    else{
        setTimeout(()=>{
            console.log("Hey I am done 2");
            resolve("Request Successful")
            
        },5)
    }
})

// prom2.then((a)=>{
//     console.log(a)
// }).catch((err)=>{//this is error handling
//     console.log(err);
// })


// let p3=Promise.all([prom1,prom2])//returns an array of the return values of prom1 and prom2 when they are resolved, this is not executed if any of the is rejected

// let p3=Promise.allSettled([prom1,prom2])//this returns a array of the status(whether resolved or rejected) and the value if fulfilled or the reason if reected what the both have returned

let p3=Promise.race([prom1,prom2])//the promise which is settled first its result/error is showed then the result/error of the next one is showed
//this race is required when there are multiple links to download a image from the server but you want the one which is the fastest then the this is used

p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})