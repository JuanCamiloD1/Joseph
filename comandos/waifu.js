const Discord = require("discord.js");
  module.exports = (client, message, args) => { 
    const embed = new Discord.RichEmbed()
    .setColor("fc03db")
    .setDescription("UY! :flushed:")
    .setImage("https://media.giphy.com/media/4NZxtNA8Ef5L2/giphy.gif")
    message.channel.send(embed); 
  }