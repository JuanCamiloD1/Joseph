const Discord = require("discord.js");
  module.exports = (client, message, args) => { 
    let wiki = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription("[Una cosa fuera de contexto XD](http://es.wikipedia.org/wiki/Special:Random)")
.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Internet_Explorer_9_icon.svg/1200px-Internet_Explorer_9_icon.svg.png")
.setFooter("Este enlace te llevará a algo random XD")
message.channel.send(wiki)    
  }