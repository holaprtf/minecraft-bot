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

Bot.on("end",()=>{
    setInterval(()=>{
        console.log("intentando conectar");
        const Bot = mineflayer.createBot({
            host:"CONURBA.aternos.me",
            username: "Bot",
            version: "1.16.2",
        }); 
    }, 1000);
    
});

