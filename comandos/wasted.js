const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media.tenor.com/images/d8ebeb9f8b193ea68f20c73c0b1f3498/tenor.gif",
"https://media.tenor.com/images/afb2e33fbb9fc771700d8270beb63afb/tenor.gif",
"https://media.tenor.com/images/030cccbe57d9f52740a483eacb4ea6e9/tenor.gif",
"https://media.tenor.com/images/5e07573dfefccc7384b9665178a54a2a/tenor.gif",
"https://media.tenor.com/images/921a4d7680c8ec6a51b10a68564b6772/tenor.gif",
"https://64.media.tumblr.com/bb339dc0effaf69779310b908ec7f9b4/db3214eec8059a2e-59/s400x600/4b77c2fc7ed205c318964d9d026e185284098e0e.gifv",
"https://media.tenor.com/images/08e67b10b993df2230d538b2845727e6/tenor.gif",
"https://i.pinimg.com/originals/95/92/48/959248052ffa8f642efd07e5a7417261.gif",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
message.reply("Debes mencionar a alguien OwO");
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> ha matado a <@${user.id}>`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }