// importing global module http
const http = require('http');
// importing express js
const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("In the middleware");
    next()
});

app.use((req,res,next)=>{
    console.log("In Another the middleware");
    res.send('<h1>Welcome to node js</h1>');
    next()
    // ....
});

// creating server using http
const server  = http.createServer(app);

server.listen(3000)