const Discord = require("discord.js");
module.exports = (client, message, args) => { 
    var server = message.guild; 
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Ayuda")
    .setDescription("Comandos disponibles:")
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField("Prefix:","/")
    .addField("anounce:","Hace un anuncio en el canal de anuncios del servidor (SOLO ADMINS)")
    .addField("anvorguesa:","Le das una anvorguesa a alguien :hamburguer:")
    .addField("avatar:","te muestra tu avatar o el de un usuario que menciones")
    .addField("beer:","Para tomar y emborracharte con los panas :beer:")
    .addField("cry:","lloras ;-;")
    .addField("cuddle:","Te acurrucas con alguien")
    .addField("help:","Comando de ayuda")
    .addField("hug:","Para abrazar a alguien")
    .addField("husbando:","Muestra la imagen de un husbando :flushed:")
    .addField("kiss:","Das un beso a otro user :3")
    .addField("loli:","Descubrelo tu mismo :eyes:")
    .addField("mute:","mutea a un user (SOLO ADMINS)")
    .addField("nocontext:","Busca algo random en internet")
    .addField("onichan:",":flushed:")
    .addField("pat:","Acaricias a un usuario UwU")
    .addField("perfil:","Revisas tu perfil en el server")
    .addField("ping:","Mira el ping del bot respecto a la API de Discord")
    .addField("punch:","Golpeas a un usuario")
    .addField("server:","Info del server")
    .addField("slap:","Le das una bofetada a alguien")
    .addField("sleep:","Te vas a mimir")
    .addField("unmute:","Quita el mute a un user muteado (SOLO ADMINS)")
    .addField("waifu:",":flushed:")
    .addField("wasted:","F")
    message.channel.send(embed);    
    }