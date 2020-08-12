const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://thumbs.gfycat.com/AffectionateCheapFeline-small.gif",
"https://giffiles.alphacoders.com/211/211053.gif",
"https://64.media.tumblr.com/069924af0c6281e16f8c8787e39cdb6d/tumblr_p7fofzHBzf1x2mcf9o1_400.gifv",
"https://i.pinimg.com/originals/e6/bb/8a/e6bb8af7bfcb47e639d4e5c09f58a040.gif",
"https://media.tenor.com/images/151c28a3c7d4f4a432c74f991c5341af/tenor.gif",
"https://media1.tenor.com/images/adcecba1d189dc3ae2a11fa77a2c6c11/tenor.gif?itemid=17909392",
"https://data.whicdn.com/images/310988200/original.gif",
"https://media1.tenor.com/images/72c22f7d3810e92968cd550d9a69239c/tenor.gif?itemid=14506127",
"https://pm1.narvii.com/6841/82823ad29f627864f7e9d4acc50f6638c0fd2f74v2_hq.jpg",
"https://img-9gag-fun.9cache.com/photo/apmobED_460s.jpg",
"https://media.tenor.com/images/75de692f3079bebdac82e3667c0a94cd/tenor.gif",
"https://64.media.tumblr.com/008a2224a57339b8d2cca2f73545cab6/tumblr_myozzdZGFL1rnte9xo8_250.gifv",
"https://media.tenor.com/images/4632e943653b0ad278a1fa7b8f49d82c/tenor.gif",
"https://media.tenor.com/images/5be4ce8a370604b28abf46ce0057c701/tenor.gif",
"https://media.tenor.com/images/baf3094e3b2251fe16bd270bcf73aafc/tenor.gif",
];
let cap = gifs[Math.floor(gifs.length * Math.random())]; 
let pr = message.mentions.users.first();
let user = message.mentions.members.first()
if (!pr) {
  const embed = new Discord.RichEmbed()
  .setDescription(`Una waifu ha aparecido :flushed:`)
  .setImage(cap)
  .setColor("RANDOM");
  message.channel.send(embed);
} 
  }
