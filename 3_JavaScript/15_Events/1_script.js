let button=document.querySelector("#b1");

// button.addEventListener("click" ,()=>{
//     // alert("This was clicked")
//     document.querySelector(".out").textContent="Yayyy! this button was clicked"//You can write anything in this and that will be done once the specified action is performed
// })

button.addEventListener("keydown",(e)=>{
    // kewdown is when you press a key on your keyboard
    //e stores the event happend
    alert(e);
    console.log(e)
    //this event happens only when you click the button and press a key on keyboard
})

document.addEventListener("keydown",(e)=>{
    alert(e);
    console.log(e);
})