const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args, member) => {
     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('<a:volantisred:706940680458600541> Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!') 
     let mesaj = args.join(' ');
     if (!mesaj) return message.channel.send("<a:volantisred:706940680458600541> Ototag ayarlamak için bir değer belirtmelisiniz. `.ototag || - `"); 
     if (message.channel.type === "dm") return;
     if (message.author.bot) return;
      await db.set(`ototag_${message.guild.id}`, mesaj)
	  	  const embed = new Discord.RichEmbed()
  .setDescription(`<a:volantiskabul:706940681448587479> Ototag Sistemi Başarıyla Açıldı Tag \`${mesaj}\` Olarak Ayarlandı!` + "\n\n Kapatmak için **`.ototagkapat`** Yazabilirsiniz!")
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send({ embed });
}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ototag',
  description: 'nblm',
  usage: 'ototag'
};