const Discord = require("discord.js");
  module.exports = (client, message, args) => { 
    let pr = message.mentions.users.first();
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> comienza a llorar :sob:`)
    .setImage("https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif")
    message.channel.send(embed); 
  }