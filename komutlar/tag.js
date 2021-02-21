const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Sunucu Tagı ")
  .setColor("RANDOM")
  .setDescription(`❃`)
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'tag',
 description: 'Botun Pingine Bakarsın',
 usage: '!ping'
};
 