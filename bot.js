const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
var TempMemr = ["это"];
var TempText = ["0"];
var TempAlgn = ["0"];
var TempType = ["0"];

var MessageBase = [];

client.on('ready', () => {
  //console.log(`Logged in as ${423868710940311552}!`);
  
});

client.on('message', msg => { 
  sMsg = msg.content.split(" ");
  if(msg.content == "$$TEST"){
    msg.reply("0.2");
  }
  
  if(msg.content == "$$LAST" && MessageBase.length != 0) {
    var LogoOut = "[";
    LogoOut += MessageBase[0];
    LogoOut += " ";
    for(i=1;i<MessageBase.length();i++){
      LogoOut+=",";
      LogoOut+=MessageBase[i];
      LogoOut+= " ";
    }
    LogoOut += "]";
    msg.reply(LogoOut);
  } else if(msg.content == "$$LAST") {
    msg.reply("err");
  }
  
  for(i = 0; i < sMsg.length; i++) {
    if(sMsg[i] in TempMemr) {
      var INDEX = TempText.find(sMsg[i]);
      var MEMR = TempMemr[INDEX];
      var ALGN = TempAlgn[INDEX];
      var TEXT = TempText[INDEX];
      var TYPE = TempType[INDEX];
      
      if(ALGN == "0" && TEXT == "0" && TYPE == "0"){
        MessageBase.push("$$IS");
      } 
    } else {
      MessageBase.push(sMsg[i]);
    }
  }
});

client.login(process.env.BOT_TOKEN); // wow

