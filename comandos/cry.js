const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media.tenor.com/images/916eef33cfc5b7c2bc5a785376c98d51/tenor.gif",
"https://media.tenor.com/images/c4d902acd8dfd32f41828d7809c6e0b2/tenor.gif",
"https://media.tenor.com/images/426937088a1a6c3a8b74d5093736a2c3/tenor.gif",
"https://media.tenor.com/images/eac1c5237e486a36a43e229872827fb9/tenor.gif",
"https://media.tenor.com/images/c4d902acd8dfd32f41828d7809c6e0b2/tenor.gif",
"https://media.tenor.com/images/7cba9943d6449423bd9da78929bf6337/tenor.gif",
"https://media.tenor.com/images/b04efcbe0cefbd4000d98f03dfc7e57b/tenor.gif",
"https://media.tenor.com/images/79c984c5dd7d67f76c126f27fc2d5a59/tenor.gif",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
message.reply("Debes mencionar a alguien OwO");
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> se puso a llorar ;-;`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }