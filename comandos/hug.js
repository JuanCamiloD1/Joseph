const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media.giphy.com/media/mYKoKrns0a4es/giphy.gif",
"https://media.tenor.com/images/bc3e8c25619b64c10fd38e172ad99c37/tenor.gif",
"https://media.tenor.com/images/dcc6c1eb5fee68a33ba24b3067128bce/tenor.gif",
"https://media.tenor.com/images/3863a5b19b51f39dcf5b47d6c4bba1b4/tenor.gif",
"https://media.tenor.com/images/3a94824bab9756bb7cd94b65e751037b/tenor.gif",
"https://media.tenor.com/images/8fd7cf578f4154cb7ac4d3090afc19e3/tenor.gif",
"https://media.tenor.com/images/5241a400bd864c963fdaf33aa369c64c/tenor.gif",
"https://media.tenor.com/images/10492f09c41742f6a60994d9affb9f16/tenor.gif",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
message.reply("Debes mencionar a alguien OwO");
} else {  
const embed = new Discord.RichEmbed()

.setDescription(`<@${message.author.id}> abrazó a <@${user.id}> :blush:`)
.setImage(cap)
.setColor("RANDOM");
message.channel.send(embed);
}   

  }