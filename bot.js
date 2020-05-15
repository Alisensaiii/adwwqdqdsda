 const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Gokalp 7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\

client.on("userUpdate", async (old, nev) => {
let tag = "仒";
let tagsıztag = "亽";
let gchat = "709432720874406049";
let sunucu = "709431493960925255";
let tagrol = "709432634140262470";
let notdefteri = [`Klasik oldu ama her şeye rağmen hayattayız yanımızda hatalarımız.`, `Size avans vermek için biraz vuruluyorum.`, `Niye küstahça bakışlara sabır ediyorum?`, `Silgiyle iz bıraktın, kalemle silinmedin.`, `Hiç bir melek ölmez ama sen bi kere dirilmedin.`, `İnsan gelir, insan geçer.`, `Amacım kötü değil, istiyordum yardım ama dönülmez akşamların ufkunda kaldım.`, `Çık hücrenden, ruhunu göster`, `Her şeyi gören sen. Göremedin mi beni?`, `Her şeyi duyan sen. Duyamadın mı beni?`, `Her şeyi bulduysan. Bulamadın mı beni?`, `Her şeyi bilen sen. Bilemedin bir beni`, `Ben olmasam bile hayat gülsün sana.`, `Kahverengi gözlerin var ama gökyüzü gibi bakıyosun.`, `Başka bir yer varsa orada tekrar görüşürüz belki yoksa da seni tanımak benim cennetimdi zaten.`, `Herkes merak içinde ölümden sonra hayat var mı diye boşuna düşünürler sanki hayat varmış gibi ölümden önce.`, `Kim benim düşmanım, kim senin dostun?`, `Bana güzel bir şey söyle - söyle kalbim dursun - beni sevdiğini söyle - varsın yalan olsun..`, `Bir gün gelir aşk biter, insafsızca terk eder. Bütün bunların ardından sadece gözyaşı kalır.`,`Senin olanın yokluğu, bir alev gibi yaktı mı hiç seni?`,`Yalanlarımız güzel, inanması zevkli.`,`Havam bozulmaya başladı yine. Gözlerim de dolmaya. Sanırım içimde bir yerlere sen yağdı gece gece...`,`Güne açan çiçekler gibiyiz, yalaaaaaaaaaaağn`];
let xxxxxxxxx =  client.guilds.get(sunucu).members.get(nev.id).displayName;
if (old.username === nev.username) return;
if (nev.username.includes(tag)){
  let qwe = xxxxxxxxx.replace(tagsıztag, tag);
if (old.username.includes(tag)) return;
client.guilds.get(sunucu).channels.get(gchat).send({
  embed: { 
   description: "<@"+ nev.id +"> " + " adlı üye tagımızı aldığı için " + "<@&" + tagrol + "> rolü verildi.",
  footer: {
    text: `${[notdefteri[Math.floor(Math.random() * notdefteri.lenght)]]}`
  },
  timestamp: new Date(),
   color: Math.floor(Math.random() * (0xFFFFFF + 1))
   }
    }).catch(console.error);
client.guilds.get(sunucu).members.get(nev.id).addRole(tagrol).catch(console.error);
client.guilds.get(sunucu).members.get(nev.id).setNickname(qwe)
} else {
  let qwerty = xxxxxxxxx.replace(tag, tagsıztag);
 if (!old.username.includes(tag)) return;
client.guilds.get(sunucu).channels.get(gchat).send({
  embed: {
   description: "<@"+ nev.id +"> " + " adlı üye tagımızı çıkardığı için <@&" + tagrol + "> " + " rolü alındı.",
  footer: {
   text: `${[notdefteri[Math.floor(Math.random() * notdefteri.lenght)]]}`
  },
  timestamp: new Date(),
    color: Math.floor(Math.random() * (0xFFFFFF + 1))
  }
   }).catch(console.error);
client.guilds.get(sunucu).members.get(nev.id).removeRole(tagrol).catch(console.error);
client.guilds.get(sunucu).members.get(nev.id).setNickname(qwerty);
             };
                 });


//
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Teyitsiz Üye');// 'Üye' yazılan yeri otomatik rol vereceği rolü yapabilirsiniz.//Otorol Komudu :)
  member.sendMessage("Sunucumuza Hoş Geldiniz Keyifli Vakitler Geçirmenizi Dileriz.")//Sunucuya Yeni Biri Geldiğinde Mesaj Atar istediğini yaz.
  member.addRole(joinRole);
});

//
client.on("guildMemberAdd", member => {  
  const kanal = "709432692290093156";
  let user = client.users.get(member.id);
  require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();  
  const embed = new Discord.RichEmbed()
 
  var kontrol;
if (kurulus < 1296000000) kontrol = ' <a:guardreq:707299041079197717>  **__Bu Hesap Güvenilir Değil__** <a:guardreq:707299041079197717>  '
if (kurulus > 1296000000) kontrol = '<a:guardtik:707299040982859776>  **__Bu Hesap Güvenilir Gözüküyor__** <a:guardtik:707299040982859776> '
  moment.locale("tr");
  let buse = client.channels.get(kanal);
buse.send("**<a:greenload:707298603592319017> Hoşgeldin! " + member + " Seninle __\`" + member.guild.memberCount + "\`__ Kişiyiz.**  \n <a:ops:707298622148182046> **Müsait olduğunda Confirmed Odalarından Birine Geçip Kaydını Yaptırabilirsin..** \n <a:xbrave:707298607614656523> <@&709432624753541181> seninle ilgilenicektir. \n <a:elmas1:707302174375411713> Hesabın Oluşturulma Tarihi:" + moment(member.user.createdAt).format("** YYYY __DD MMMM dddd (hh:mm:ss)__**") +  "\n"  + kontrol + " \n **<a:bluestar:707299090853003307>  ** **Tagımızı alarak ` 仒 ` bize destek olabilirsin.** \n",  new Discord.Attachment("https://cdn.discordapp.com/attachments/707284153522978897/708381484201017354/ezgif.com-crop_14.gif"                   
   )
  );
});

//BURAYI @ROLEİD GİBİ EDİTLEYEBİLİRİSİNİZ ! 

//
client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
   var rol = member.guild.roles.get("707298275291562076") ///Cezalı Rol ID'si
   var rol = member.guild.roles.get("707298278449872907") ///Cezalı Rol ID'si
   var kayıtsız = member.guild.roles.get("707298304500695086") ///Kayıtsız rolü ID'si
   member.addRole(rol)
member.user.send('Hesabınız Bir Hafta Gibi Kısa Bir Sürede Açıldığı İçin Cezalıya Atıldınız, Yetkililere Bildirerek Açtırabilirsiniz.')
setTimeout(() => {

        member.removeRole(kayıtsız.id);

}, 1000)

    
   }
        else {

        }  
    });
//
client.on("ready", () => {
  client.channels.get("709432702914265128").join();
   //main dosyaya atılacak
})
//

//oto tag

client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`technotag_${member.guild.id}`);
  let tagsekil;
  if (tag == null) tagsekil = member.setNickname(`${member.user.username}`)
  else tagsekil = member.setNickname(`${tag} ${member.user.username}`)
});
//////////////ototag
//oto tag