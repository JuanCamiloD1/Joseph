const Discord = require("discord.js");
  module.exports = (client, message, args) => { 
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("ALTO AHÍ!!!! :police_car: ")
    .setImage("https://media.giphy.com/media/QUY2pzDAKVpX3QacCg/giphy.gif")
    message.channel.send(embed); 
  }