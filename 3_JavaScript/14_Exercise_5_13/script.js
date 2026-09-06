function createCard(thumbnail,title,cname,views,date,duration){
    let cont=document.body.children[0];
    
    let img=cont.children[0].children[0];
    img.src=thumbnail;

    let content=cont.children[1];
    content.children[0].textContent=title;

    // [span.cname, span, span.views, span, span.date]
    let extra=content.children[1];
    extra.children[0].textContent=cname;

    if(views>=1000 && views<1000000){
        views=String((views/1000).toFixed(2))+" K";
    }
    else if(views>=1000000 && views<1000000000){
        views=String((views/1000000).toFixed(2))+" M";
    }
    else if(views>=1000000000 && views<1000000000000){
        views=String((views/1000000000).toFixed(2))+" B";
    }
    
   
    
    extra.children[2].textContent=views+" views";
    
    extra.children[4].textContent=String(date)+" ago";

    cont.children[0].children[1].textContent=duration

}

createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA","Hello This is an Example","CodeWithHarry",2878,"7 years","23:30");