const express = require('express');
const server = express();
const {PORT} = require('./config')
const{HomeRouter,QuotesRoute}= require('./routes')
const{NotFount} = require('./middlewares')
 
server.use(express.static("./public"));
server.use(express.json());

server.use("/",HomeRouter); 
server.use("/quotes",QuotesRoute); 
server.use(NotFount);


server.listen(PORT, ()=>{
    console.log('Escuchando en el puert: ' + PORT)
});