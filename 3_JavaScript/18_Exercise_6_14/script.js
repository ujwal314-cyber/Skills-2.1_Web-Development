async function dot(int,char=".") {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(char)
        }, int)
    })
}

async function line_1(str,sel,n1,n2=10,int=90) {

    const cont = document.querySelector(sel)
    let c = 0
    for (let i = 0; i < n1; i++) {
        cont.textContent = ">>> "+str
        for (let i = 0; i < n2; i++) {
            cont.textContent += await dot(int)
            c++;
        }
    }
}

async function main() {
    await line_1("Initializing Hacking ",".c_1",4,10,50)
    await line_1("Fetching Files ",".c_2",3)
    await line_1("Exporting Files ",".c_3",3)
    await line_1("Locking your system ",".c_4",3)

    document.querySelector(".count").textContent=await dot(0,"5")
    document.querySelector(".count").textContent=await dot(1000,"4")
    document.querySelector(".count").textContent=await dot(1000,"3")
    document.querySelector(".count").textContent=await dot(1000,"2")
    document.querySelector(".count").textContent=await dot(1000,"1")
    await dot(1000)

    document.querySelector(".count").textContent=""
    document.querySelector(".img").innerHTML="<img src=\"https://www.clker.com/cliparts/f/0/d/7/1317499345657265231matrix-stile-skull[1]-md.png\" alt=\"\">"


}

main()