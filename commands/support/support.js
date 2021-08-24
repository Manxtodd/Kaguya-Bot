const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "support",
  category: "support/donation",
  description: "description",
  run: async (client, message, args) => {
  let embed = new MessageEmbed()
 .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
 .setTitle("Support")
 .setDescription("Support Manxtodd")
 .addField('BuyMeACoffee', '**[Click Here](https://buymeacoffee.com/manxtodd)**', true)
 .addField('Instagram', '**[Click Here](https://instagram.com/manxtodd)**', true)
 .addField('YouTube', '**[Click Here](https://www.youtube.com/c/VecsViz)**')
 .setColor("RANDOM")
 .setFooter("© Manxtodd")
 .setTimestamp()
message.channel.send(embed)
}
};
