console.log("Sentence one")
console.log("Sentence two")

setTimeout(()=>{
    console.log("This is timeout")
})
setTimeout(()=>{
    console.log("This is timeout 2")
})

console.log("The end")
const callback=(name)=>{
    console.log("Hello this is "+name)
}

const loadscript =(src,callback)=>{
    let s=document.createElement("script");
    s.src=src;
    s.onload=callback("Name");//here calling a function inside a function is a callback but when there are multiple callbacks i.e.calling a function inside one function and that calling another function inside it like this , it becomes very difficult to debugg the code so for this promises are used
    document.head.append(s);
}

let s="for(let i=0;i<10;i++){console.log(i);}"
loadscript(s,callback)

