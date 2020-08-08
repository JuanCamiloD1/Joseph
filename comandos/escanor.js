const Discord = require("discord.js");
  module.exports = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("fc03db")
    .setDescription("Y quien lo decidió??")
    .setImage("https://media.giphy.com/media/1zJEz2pvqumDlG2Twh/giphy.gif")
    message.channel.send(embed); 
  }