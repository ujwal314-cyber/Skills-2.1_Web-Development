const fs=require('fs')
const path=require('path')

let dir="C:\\Users\\M U\\OneDrive\\Desktop\\My\\Web Development\\4_Backend\\5_Exercise_1_15\\Sample"

dir=dir+'\\'

let cont=fs.readdirSync(dir)

for (const i of cont) {
    let ext=path.extname(i)
    ext = ext.slice(1)
    let src=dir+i
    let dest=dir+ext+'\\'+i
    ext=dir+ext
    if(!fs.existsSync(ext))
        fs.mkdirSync(ext)
    fs.renameSync(src,dest)
    

}



