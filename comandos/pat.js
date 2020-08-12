const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif",
"https://media.tenor.com/images/943a52d38d896bda734a6396b1ffca89/tenor.gif",
"https://media.tenor.com/images/263fa2af71083ecbbbc8a00d991c7e72/tenor.gif",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
message.reply("Debes mencionar a alguien OwO");
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> acarició a <@${user.id}> :3 :blush:`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }