const express = require('express');
const http = require('http');
const app = express();

const server = http.createServer((req,res)=>{
    res.end("Welcome to My Page")
});

app.use((error ,req,res,next)=>{
    res.status(error.status || 404).send({
        error:{
            status: error.status || 404,
            message: error.message || 'Page Is not Found',
        },
    });
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port No 8000");
})