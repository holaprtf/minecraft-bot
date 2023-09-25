const mineflayer = require("mineflayer");
var express = require('express');
var app = express();

const PUERTO = 80;

app.listen(PUERTO, function(){
	console.log('Servidor http correindo en el puerto 80');
});

app.get('/', function(req, res){
	res.send('Hola, estas en la pagina inicial');
	console.log('Se recibio una petición get');
});

const Bot = mineflayer.createBot({
    host:"CONURBA.aternos.me",
    username: "Bot",
    version: "1.16.2",
}); 

Bot.on("spawn", ()=> {
   setInterval(()=>{
    console.log("bot conectado")
   }, 100000);
});


