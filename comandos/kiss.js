const Discord = require("discord.js");
  module.exports = (client, message, args) => {
let gifs = ["https://media.giphy.com/media/JFmIDQodMScJW/giphy.gif",
"https://media1.tenor.com/images/810ad376d5e6d76f5ac4223a1a738782/tenor.gif?itemid=16079566",
"https://media1.giphy.com/media/zrgr6zIsDRNQq0YbNm/giphy.gif",
"https://cdn.statically.io/img/gifimage.net/wp-content/uploads/2017/09/anime-forehead-kiss-gif-5.gif",
"https://i.kym-cdn.com/photos/images/original/001/387/983/be2.jpg",
"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/14399c5b-e72d-4a35-912b-f005f433fa0c/ddoo6i7-a110f772-354d-4ebd-bebb-ed01cdbf0396.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTQzOTljNWItZTcyZC00YTM1LTkxMmItZjAwNWY0MzNmYTBjXC9kZG9vNmk3LWExMTBmNzcyLTM1NGQtNGViZC1iZWJiLWVkMDFjZGJmMDM5Ni5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.16_cBtUeA95rU2lBjUtFlHOy5rDcCVF2H7JfdDe3KM8",
"https://static.zerochan.net/Boku.no.Hero.Academia.full.2125605.png",
"https://i.pinimg.com/originals/2b/52/71/2b5271e20fa65925e07d0338fa290135.gif",
"https://cdn.lowgif.com/full/a83dce7fd4dda8f8-anime-kiss-gifs-find-share-on-giphy.gif",
"https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
"https://steamuserimages-a.akamaihd.net/ugc/199680985365594605/AE3C81B51ABCC9CEBEA0C82D8FC3CF02BA02A198/",
"https://64.media.tumblr.com/70d58855d3d6dc8fcda71e68fe6889d0/tumblr_n5hm4rqX6O1skkm34o1_500.gif",
"https://media.shoanime.com/2019/08/tenor-1.gif",
"https://64.media.tumblr.com/45c6df05717dd681bb36b7e804d5c1ef/tumblr_mtfwheDJ2k1rlc7njo4_400.gif",
"https://lh3.googleusercontent.com/proxy/y_XuAgAykrxXLLo44UgsqFWNhZdijb2fbuSxnC8HgZwCdQUjK91Buo4lAbK2vzjThljWuYh8aIiRePl-JEaaQY9IE5LVXcM",
"https://i.pinimg.com/originals/fb/6d/95/fb6d953fc08d512313574b64991b793f.gif",
"https://em.wattpad.com/776acb2e04e78265020295611f9b2e9a8c4e883c/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6c4a7054714f6978383947514d413d3d2d3136332e3134636261623365346538393038313037303937333735363539312e676966?s=fit&w=720&h=720",
"https://media1.tenor.com/images/e46f97aae4bdaba14cd95b2b35dda4d2/tenor.gif?itemid=15489397",
"https://i.pinimg.com/originals/e3/4e/31/e34e31123f8f35d5c771a2d6a70bef52.gif",
"https://acegif.com/wp-content/uploads/anime-kiss-m.gif",
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