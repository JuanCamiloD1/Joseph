const Discord = require("discord.js");
    module.exports = (client, message, args) => { 
        let str = args.join(" ");
        let rgx = /"(.*?)"/g
        let final = str.split(rgx)
        let titulo = final[1]
      
      if(!titulo) {
        let embed = new Discord.RichEmbed()
         .setTitle("Argumentos inválidos")
         .setDescription("Debes colocar aunque sea el titulo de la encuesta")
         .addField("Uso correcto:", `\`EKTpoll "título de la encuesta" "opción 1" "opción 2" "opción 3"\`. _(Puedes colocar hasta un máximo de 10 opciones)_`)
       return message.channel.send(embed)
      
      }
        if(!final[3]) {
        let embedencuesta = new Discord.RichEmbed()
         .setTitle("Encuesta")
         .setDescription(titulo+"\n\n✅ === Si.\n❎ === No.")
        message.channel.send(embedencuesta).then(async r=> {
          await r.react("✅")
          await r.react("❎")
      })
      return;
      }
          if(final.length >= 24) {
        new Discord.RichEmbed()
         .setTitle("Argumentos inválidos")
         .setDescription("El número indicado de opciones es mayor a 10.")
       return message.channel.send(embed)
      }
      
        let a = "🇦 === "+final[3]
        let respuestas = [a]
        let emojis = ["🇦"]
        if(final[5]) {
          respuestas.push("🇧 === "+final[5])
          emojis.push("🇧")
        } 
        if(final[7]) {
              respuestas.push("🇨 === "+final[7])
          emojis.push("🇨")
        }
        if(final[9]) {
              respuestas.push("🇩 === "+final[9])
          emojis.push("🇩")
        }
        if(final[11]) {
              respuestas.push("🇪 === "+final[11])
          emojis.push("🇪")
        }
        if(final[13]) {
              respuestas.push("🇫 === "+final[11]+"")
          emojis.push("🇫")
        }
        if(final[15]) {
              respuestas.push("🇬 === "+final[15])
          emojis.push("🇬")
        }
        if(final[17]) {
              respuestas.push("🇭 === "+final[17])
          emojis.push("🇭")
        }
        if(final[19]) {
              respuestas.push("🇮 === "+final[19])
          emojis.push("🇮")
        }
        if(final[21]) {
              respuestas.push("🇯 === "+final[21])
          emojis.push("🇯")
        }
        
        let msg = respuestas.map(r=> r).join("\n")
        
        let embedencuesta = new Discord.RichEmbed()
         .setTitle("Encuesta")
         .setDescription(titulo+"\n\n"+msg)
        message.channel.send(embedencuesta).then(async r=> {
        if(emojis[0] === "🇦") {
         await r.react(emojis[0])
         }
        if(emojis[1] === "🇧") {
         await r.react(emojis[1]) 
         }
        if(emojis[2] === "🇨"){
         await r.react(emojis[2]) 
         }
        if(emojis[3] === "🇩") {
         await r.react(emojis[3]) 
         }
        if(emojis[4] === "🇪") {
         await r.react(emojis[4]) 
         }
        if(emojis[5] === "🇫") {
         await r.react(emojis[5]) 
         }
        if(emojis[6] === "🇬") {
         await r.react(emojis[6]) 
         }
        if(emojis[7] === "🇭") {
         await r.react(emojis[7]) 
         }
        if(emojis[8] === "🇮") {
         await r.react(emojis[8]) 
         }
        if(emojis[9] === "🇯") {
         await r.react(emojis[9]) 
         }
        })
    }