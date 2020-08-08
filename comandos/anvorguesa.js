const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
message.reply("Awww, solo? ;-; , te mando una anvorguesa :hamburger: :3");
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> le mandó una anvorguesa a <@${user.id}> :hamburger:`)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }