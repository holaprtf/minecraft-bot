const mineflayer = require("mineflayer");
const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const {Server} = require("socket.io");
const io = new Server(server);

app.get("/",(req, res)=>{
    res.send("servidor")
});


const Bot = mineflayer.createBot({
    host:"CONURBA.aternos.me",
    username: "Bot",
    version: "1.16.2",
}); 

Bot.on("spawn", ()=> {
   setInterval(()=>{
    console.log("bot conectado")
   }, 10000);
});

server.listen(3000, ()=>{
    console.log("servidor escuchando en el puerto 3000 ");
});

