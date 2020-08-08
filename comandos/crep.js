const Discord = require("discord.js");
const dg = require("discord-gestor");
  module.exports = (client, message, args) => { 
    dg.perfil.verReputacion(message.author.id, (rep) =>{
		message.channel.send('Tus puntos de reputación son '+ rep.cantidad + ' :sunglasses:')
	});
  }