const Discord = require("Discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Shimazake, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDA1NDgzNDMzMjg1MTI0MDk2.DUlDbg.13Q9f5aagS-6fG1Z-ZeRBvkHsCY");
