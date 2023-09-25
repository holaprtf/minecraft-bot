const mineflayer = require("mineflayer");

const Bot = mineflayer.createBot({
    host:"CONURBA.aternos.me",
    username: "Bot",
    version: "1.16.2",
}); 

Bot.on("spawn", ()=> {
   setInterval(()=>{
    console.log("bot conectado")
   }, 1000);
});



