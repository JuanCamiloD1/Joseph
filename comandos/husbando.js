const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media.tenor.com/images/43ab734c3345050f1d402c1088d305bd/tenor.gif",
"https://media.tenor.com/images/707b86ae7b393d23094045ba4dcfe637/tenor.gif",
"https://media.tenor.com/images/f7c9a0bf17b9b881df899bca368d286f/tenor.gif",
"https://media.tenor.com/images/3aebffe8d37313c64e8d22772a8f1473/tenor.gif",
"https://media.tenor.com/images/3aebffe8d37313c64e8d22772a8f1473/tenor.gif",
"https://media.tenor.com/images/1f6a4f7330eb51b42200b799f53f55cc/tenor.gif",
"https://media.tenor.com/images/6cb4c10dc20cc26d39fa34d69f59514b/tenor.gif",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
  const embed = new Discord.RichEmbed()
  .setDescription(`Un husbando ha aparecido :flushed:`)
  .setImage(cap)
  .setColor("RANDOM");
  message.channel.send(embed);
} 
  }
