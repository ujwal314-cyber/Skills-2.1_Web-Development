// function rc(){
//     let r= Math.floor(Math.random()*1000);
//     return "#"+r.toString(16);
// } this doesnt use all the colours as it doesnt go till 16777215(white)


function rc(){
    let r= Math.floor(Math.random()*16777215);
    return "#"+r.toString(16);
}

// document.querySelectorAll(".box").forEach(e=>{
//     e.style.color=rc();
//     e.style.backgroundColor=rc();
// })

document.querySelectorAll(".box").forEach(e=>{
    r=rc();
    console.log(r);
    e.style.color=r;
    r=rc();
    console.log(r);
    e.style.backgroundColor=r;
})