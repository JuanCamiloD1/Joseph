const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media.giphy.com/media/JFmIDQodMScJW/giphy.gif",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
message.reply("Debes mencionar a alguien OwO");
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> besó a <@${user.id}> :3 :heart:`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }