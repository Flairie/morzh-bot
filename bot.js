const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
var TempMemr = ["это"];
var TempText = ["0"];
var TempAlgn = ["0"];
var TempType = ["0"];


client.on('ready', () => {
  //console.log(`Logged in as ${423868710940311552}!`);
  let GreatJar = Math.floor(Math.random()*Games.length);
  client.user.setPresence({ game: { name: Games[GreatJar] + Game }, status: 'dnd' });
  
  setInterval(() => {
    let GreatJar = Math.floor(Math.random()*Games.length);
    client.user.setPresence({ game: { name: Games[GreatJar] + Game }});
  }, 600000);
});

client.on('message', msg => { 
  sMsg = msg.content.split(" ");
  if(msg.content == "$$TEST"){
    msg.reply("Именнно");
  }
  
  var MessageBase = [];
  
  for(i = 0; i < sMsg.length; i++) {
    if(sMsg[i] in TempMemr) {
      var INDEX = TempText.find(sMsg[i]);
      var MEMR = TempMemr[INDEX];
      var ALGN = TempAlgn[INDEX];
      var TEXT = TempText[INDEX];
      var TYPE = TempType[INDEX];
      
      if(ALGN == "0" && TEXT == "0" && TYPE == "0"){
        ;
      }
    }
  }
});

client.login(process.env.BOT_TOKEN); // wow

