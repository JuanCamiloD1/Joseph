const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://cdn.discordapp.com/attachments/741732334273036298/741733820578922716/98d72bde2eb72e17971df28f52616ea9.gif",
"https://cdn.discordapp.com/attachments/741732334273036298/741736728116723772/79201dca73519acbc259591fabbc2dc3.gif",
"https://cdn.discordapp.com/attachments/741732334273036298/741736728578228246/bc176aa78ce9fd82ddf457d62a02ec79.gif",
"https://cdn.discordapp.com/attachments/741732334273036298/741736728842207246/37804b3bcfb08e4a8a2867d483f58b63.gif",
"https://cdn.discordapp.com/attachments/741732334273036298/741737597302472784/58734caacd4554570d534eb4f1e0e968.gif",
"https://cdn.discordapp.com/attachments/741732334273036298/741739534412284004/b61d0b52f0d77eee7eff8a4f92797af0.gif",
"https://pm1.narvii.com/6158/6cc1590ffad86021a8a847d7960fe77bb66eded0_00.jpg",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
  const embed = new Discord.RichEmbed()
  .setDescription(`Una loli ha aparecido :flushed: ten cuidado con la poli`)
  .setImage(cap)
  .setColor("RANDOM");
  message.channel.send(embed);
} 
  }
