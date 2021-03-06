const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "KADIN ROL ID"); //buraya kadın rolünüzün id'sini koyun
  const male = message.guild.roles.find(r => r.id === "KADIN SIMGE ID"); //buraya kadın rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "MİSAFİR ROL ID"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "HG KANAL ID"); //buraya kayıt log id koyun
  const dogrulandi = client.emojis.find(emoji => emoji.name === "emoji isim"); // örn (emoji => emoji.name === "siyah");
  if(!message.member.roles.array().filter(r => r.id === "TEYİTÇİ REGİSTER ID")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    c.addRole(kayıtlı)
    c.addRole(male)
    c.removeRole(misafir)
    const embed = new Discord.RichEmbed()
    .setDescription(`**<@${c.user.id}>** adlı kişiye **<@&${kayıtlı.id}>** rolü verildi. !`)
    .setColor("0xff5cf3")
    log.send(embed)
    message.react(dogrulandi)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "kadın",
  description: "",
  usage: ""
};
   