const Discord = require("discord.js");
module.exports = (client, message, args) => { 
    let user = message.mentions.users.first() || message.author
  
    const embed = new Discord.RichEmbed()
    .setDescription(`[Descargar Avatar](${user.avatarURL})`)
    .setImage(user.avatarURL)
    .setColor(0xee8824)
    .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(embed);
}