const Discord = require("discord.js");
const rep = require("discord-gestor");
  module.exports = (client, message, args) => { 
    let userm = message.mentions.users.first()
      var user = message.author;
        const embed = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
        .addField('Estado', user.presence.status, true)
        .addField('Apodo', user.username + message.member.nickname, true)
        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
       // .addField('Reps:', rep.cantidad, 'puntos de reputación',true)
        .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
        .setColor(0x66b3ff)
        message.channel.send(embed);  
  }