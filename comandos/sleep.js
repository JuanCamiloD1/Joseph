const Discord = require("discord.js");
  module.exports = (client, message, args) => { 
    let pr = message.mentions.users.first();
    const embed = new Discord.RichEmbed()
    .setColor("fc03db")
    .setDescription(`<@${message.author.id}> se durmió`)
    .setImage("https://media.giphy.com/media/pXqaCyOWbwHi8/giphy.gif")
    message.channel.send(embed);    
  }