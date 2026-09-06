const create = require("node:http")

const server = create.createServer((req, res) => {
    //   res.writeHead(200, { 'Content-Type': 'text/plain' });//this is plain text 
    //   res.end('<h1>Hello World!</h1>\n');//so h1 also will be displayed

    //whenever you make changes in the file for that to reflect on the webpage you have to restart the server 
    //to avoid this you can use nodemon which automatically restarts the server if any changes are made in the file
    //to install it => npm install nodemon - this installs nodemon only for this folder but if you want it for entire system the
    //npm install --global nodemon / npm i --global nodemon
    //to start this open terminal and open(cd) the folder in which the file is there then type => nodemon file.js

    res.writeHead(200, { 'Content-Type': 'text/html' });//changed to html file type //this content type will determine in wt format your output will be given
    res.end('<h1>Hello World!</h1>\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});


//nvm => nod version manager
// when you want to use a different node version => nvm use 12 or nvm use version
//to you your version => node -v
//to install a particualar version => nvm install version