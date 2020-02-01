const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://profiledzs.glitch.me/`);
}, 280000);

const replace = require("replace"); //npm i replace
const Discord = require("discord.js");
const replies = require("canvas-constructor");
const client = new Discord.Client();
const ros = require("ros");
const bot = new Discord.Client();
const hero = client;
const HypixelAPI = require("hypixel-api");
const Hypixel = new HypixelAPI("4856cc0d-031c-4b27-9d49-2edb7679853b");
const fs = require("fs");
const ms = require("ms");
const giphy = require("giphy-api")();
const googl = require("goo.gl");
const emojis = require("emojis");
const Data = require("data");
const os = require("os");
const Enmap = require("enmap");
const notes = new Enmap();
const translate = require("google-translate-api");
const UserBlocked = new Set();
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const message = require("message");
const { Client, Util } = require("discord.js");
const canvas = require("canvas");
const prettyMs = require("pretty-ms");
const sqlite = require("sqlite");
const moment = require("moment");
const { getInfoFromName } = require("myanimelists");
const pretty = require("pretty-ms");
const Jimp = require("jimp");
const superagent = require("superagent");
const hastebins = require("hastebin-gen");
const jimp = require("jimp");
const convert = require("hh-mm-ss");
const db = require("quick.db");
const google = require("google-it");
const fetchVideoInfo = require("youtube-info");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const simpleytapi = require("simple-youtube-api");
const opus = require("node-opus");
const guild = require("guild");
const ytdl = require("ytdl-core");
const figlet = require("figlet");
const botversion = require("./package.json").version;
const cmd = require("cmd");
const util = require("util");
const gif = require("gif-search");
const queue = new Map();
const rainbow = {};
const dateFormat = require("dateformat");
const { get } = require("snekfetch");
const invites = {};
const wait = require("util").promisify(setTimeout);
const cool = [];
const yt = require("ytdl-core");
const table = require("table");
const p = {};
const emoji = require("emoji");
const developers = ["599351862692544532"];
const devs = ["599351862692544532"];
const { User, MessageMentions } = require("discord.js"); // Disocrd Package Classes
const Canvas = require("canvas-prebuilt"); // Canvas Package for photo stuffs
const SQLite = require("sqlite"); // SQLite Package to read & write to sql files and databases
const path = require("path"); // Path Package to get paths easily
var API = require("apextab-api");
var ApexTab_API = API.Apextab_API;
var movie = require("movie-info");
var commands = {};
var commandsCheck = [];

const prefix = "-";
require('events').EventEmitter.defaultMaxListeners = 15;
var mysql = require("mysql");
var ti = {},
  spee = {},
  attentions = {};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("");
  console.log("");
  console.log(
    "╔[═════════════════════════════════════════════════════════════════]╗"
  );
  console.log(`[Start] ${new Date()}`);
  console.log(
    "╚[═════════════════════════════════════════════════════════════════]╝"
  );
  console.log("");
  console.log("╔[═════════════════════════════════════]╗");
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log("");
  console.log(`Informations About ${client.user.username}:`);
  console.log("");
  console.log(`Servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`Channels! [ " ${client.channels.size} " ]`);
  console.log(`Arch! [ " ${process.arch} " ]`);
  console.log(`Platform! [ " ${process.platform} " ]`);
  console.log(`Node Version! [ " ${process.version}" ]`);
  console.log(`Prefix! [ " ${prefix}" ]`);
  console.log(`Language! [ " NodeJS " ]`);
  console.log(
    `Ram Usage! [ " ${(process.memoryUsage().rss / 1048576).toFixed()}MB " ]`
  );
  console.log("╚[════════════════════════════════════]╝");
  console.log("");
  console.log("╔[════════════]╗");
  console.log(`${client.user.username} Is Online`);
  console.log("╚[════════════]╝");
  console.log("");
  console.log("╔[════════════]╗");
  console.log("Created By: Haru");
  console.log("╚[════════════]╝");
});



client.on('message',async message => {
    if(message.content.startsWith("$restart")) {
        if(message.author.id !== "514525462819504128") return message.reply('You aren\'t the bot owner.');
        message.channel.send(`Don't Forget About Me<a:Tenor:659119222701424650>`).then(msg => {
            setTimeout(() => {
               msg.edit('**i Am Back SweetHeart<a:hello:657537636461707274>**');
            },5000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting<a:647115773537419270:651858365278060574>`);
        setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
        },3000);
    }
});




















client.on('message', message => {
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(credits[message.author.id].reps != moment().format('L')) {
            credits[message.author.id].reps = moment().format('L');
            credits[getvalueof.id].rep = Math.floor(credits[getvalueof.id].rep+1);
         message.channel.send(`**|  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('rep.json', JSON.stringify(credits), (err) => {
if (err) console.error(err);
})
});
const credits = JSON.parse(fs.readFileSync("./credits.json", "utf8"));
const coolDown = new Set();

var time = require("./time.json");

client.on("message", message => {
 const args = message.content.split(' ');
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
if(!credits[author]) credits[author] = {
    rep: 0,
    level: 0,
    points: 0,
    credits: 0,
  }
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile("./credits.json", JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credits" || message.content.startWith == prefix + "credit")) {
    
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`**:moneybag: | ${message.author.username}, type the credit you need to transfer! **`);
    if(mention.bot) return message.channel.send(`**:wrench: | ${message.content.split(' ')[1]} bots do not have credits!**`);
    if(mention.id === message.author.id) return message.channel.send('**You Cant Transfer Credits To Yourself**');
    if(credits[author].credits < balance) return message.channel.send(`:confused: | **${message.author.username}, You Don't Have Enough Yen**`);
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**\`${number}\` , Write The Number To Continue**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`:moneybag: | **${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(` | **Canceld**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(` | ${message.author.username}, I Can't Find** ${message.content.split(' ')[1]}**!**`);
    message.channel.send(`:bank: | **${mention.username}, your account balance is** \`$${credits[mention.id].credits}\`**.** `);
  }
 
  }
      if(args[0].toLowerCase() === `${prefix}daily`) {
let cooldown = 8.64e+7
let Daily = time[message.author.id]
if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
let times = (cooldown - (Date.now() - Daily));
message.channel.send(`:stopwatch: | **${message.author.username}, your daily credits refreshes in ${pretty(times, {verbose:true})}**`);
fs.writeFile("./time.json", JSON.stringify(time), function(e) {
if(e)throw e;
})
}else{
let ammount = (300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
credits[author].credits += ammount;
time[message.author.id] = Date.now();
message.channel.send(`:moneybag: **${message.author.username}, you got :yen: ${ammount} daily credits!**`);
fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
if(e)throw e;
})
}
}
});
    

    client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!credits[message.author.id].tite) credits[message.author.id].tite = ""
        if(!tit) {
            message.channel.send(`:grinning: | **-title [émoji] **`);
        } else {
            credits[message.author.id].tite = tit
            message.channel.send(`**Done**`)
        }
        }
        fs.writeFile('title.json', JSON.stringify(credits), (err) => {
if (err) console.error(err);
})
    })





client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
   if (message.author.bot) return;

if (message.content.startsWith(prefix + "level")) {

 message.channel.send(`**<@${message.author.id}> You level is ${credits[message.author.id].level}**`);
   }
   fs.writeFile("./level.json", JSON.stringify(credits), (err) => {
     if (err) console.error(err)
   });

 });

 client.on('message', message => {
          moment.locale('eg'); 
          if(!credits[message.author.id]) credits[message.author.id] ={
              points: 0,
              level: 1
          };
          if(message.author.bot) return;
          credits[message.author.id].points = Math.floor(credits[message.author.id].points+1);
          if(credits[message.author.id].points > 100) {
              credits[message.author.id].points = 0
              credits[message.author.id].level = Math.floor(credits[message.author.id].level+1);
              message.channel.send(`**Level UP! <@${message.author.id}> just reached level ${credits[message.author.id].level}**`)
          }
          fs.writeFile('level.json', JSON.stringify(credits), (err) => {
if (err) console.error(err);
})
      });




client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
            let user = message.mentions.users.first();
  var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
            if (!credits[getvalueof.id]) credits[getvalueof.id] = {points: 0,reps: "NOT YET",credits: 1, level: 1,tite: "-title [msg]", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
            const rg = ['p1.png'];
            fs.readFile(`${rg[Math.floor(Math.random() * rg.length)]}`, function (err, Background) {//امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300);
 
})
 
 
 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + "p1.png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        //ur name
                        ctx.font = 'bold 13px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '24px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 151, 165) // احداثيات اسمك
 
                        //ur name
                        ctx.font = 'bold 13px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${getvalueof.username}`, 149, 165) // احداثيات اسمك
 
                        //credit
                        ctx.font = "bold 12px Arial" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${credits[getvalueof.id].credits}`, 225, 145) // احداثيات المصاري
 
                        //poits
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${credits[getvalueof.id].points}`, 71, 145) // احداثيات النقاط
 
                        //Level
                        ctx.font = "bold 28px Arial" // نوع الخط و حجمه
                        ctx.fontSize = '30px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${credits[getvalueof.id].level}`, 228, 99) // احداثيات اللفل
 
                         //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${credits[getvalueof.id].tite}`, 151, 190) // احداثيات النقاط
 
                        //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${credits[getvalueof.id].tite}`, 150, 190) // احداثيات النقاط
 
                        // REP
                        ctx.font = "bold 24px  Arial";
                        ctx.fontSize = "40px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${credits[getvalueof.id].rep}`, 70,99)
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;   
                        ctx.beginPath();
                        ctx.beginPath();
                        ctx.arc(150, 100, 43, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 106, 57, 87, 86);
 
message.channel.startTyping();    
message.channel.stopTyping();
message.channel.sendFile(canvas.toBuffer())   
})
})
}
});










client.on("message", message => {
    var args = message.content.split(" ");
    var command = args[0];
    var romname = args[1];
    var spacefilter = args[2];
    // By Alpha Codes - AboKhalil 26/7/2019
    if (command === prefix + "cm") {
        if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
            message.channel.send("**يجب ان يكون لديك خاصية `MANAGE_CHANNELS`**");
        } else if (!romname) {
            message.channel.send("يجب عليك إدراج اسم الروم !");
        } else if (spacefilter) {
            message.channel.send("لا يمكن وضع مسافة في اسم الروم !");
        } else {
            // By Alpha Codes - AboKhalil 26/7/2019
            message.channel.send(`**
 🇦 لإنشاء روم كتابي
 🇧 لإنشاء روم صوتي
    **`).then(msg => {
   
            msg.react('🇦')
            msg.react('🇧')
           
    let textFilter = (reaction, man) => reaction.emoji.name === '🇦' && man.id === message.author.id;
    let voiceFilter = (reaction, man) => reaction.emoji.name === '🇧' && man.id === message.author.id;
   
    let reactiona = msg.createReactionCollector(textFilter, { time: 20000});
    let reactionb = msg.createReactionCollector(voiceFilter, { time: 20000});
   
    reactiona.on('collect', r => {
        msg.delete();
        message.guild.createChannel(romname, 'text')
        message.channel.send("**Done !** #");
 })
       
    reactionb.on('collect', r => {
        msg.delete();
        message.guild.createChannel(romname, 'voice')
        message.channel.send("**Done !**");
        })  
      })
        }
    }// By Alpha Codes - AboKhalil 26/7/2019
});
 client.on('message', message => {
   if (message.content === 'soon')
     return message.channel.send('Wait Soon<a:RainbowHeart:657996847125757972>');
   message.react('<a:RainbowHeart:657996847125757972>')
 });
   
 
 
 
 client.on('ready', () => {
    client.user.setStatus('idle')
    client.user.setPresence({
        game: {
            name: 'Prodxe✨',
            type: "LISTENING",
        }
    });
});


client.on("message", message => {
  
  if(message.author.bot) return;
  
  if(!message.content.startsWith(prefix)) return;
  
  if(!message.guild) return;
  if(message.content === (prefix + "roles")) {
    
  let i = 0;
    let U = 1;
    let str = "";
    const roles = message.guild.roles.forEach(role => `${i++} ${str += `${U++} - ` + role.name + "\n"}`)
    
   let embed = new Discord.RichEmbed()
   .setColor("BLACK")
   .setAuthor(`Found ${i} roles this server`) 
.setDescription(`${str}`) 
   .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setTimestamp();
  message.channel.send(embed) 
    
    
  } 
  }) 














client.login(process.env.BOT_TOKEN);


    