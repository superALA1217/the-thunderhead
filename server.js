//add 1 question only
//ULTRA lo - fi
//oh yeah, add progress bar to the command with  ctx
"use strict";

//Configuration
const http = require("http");
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static("public"));
app.get("/daily.json", function(request, response) {
    response.sendFile(__dirname + '/daily.json');
});
app.use(express.static("public"));
app.get("/items.json", function(request, response) {
    response.sendFile(__dirname + '/items.json');
});
app.use(express.static("public"));
app.get("/vault.json", function(request, response) {
    response.sendFile(__dirname + '/vault.json');
});
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require(`discord.js`);
var config = {
  prefix: "/",
  devprefix: "d/"
};
var economy = require("discord-eco");
const request = require("request");
const catFacts = require("cat-facts");
var cats = require("cat-ascii-faces");
var weather = require("weather-js");
const fs = require("fs");
const msmute = require("ms");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { Client, Util } = require("discord.js");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const youtube = new YouTube(process.env.APITOKEN);
const Canvas = require("canvas");
const queue = new Map();
var d =
  "https://raw.githubusercontent.com/humboldt123/shameless_image_dump/master/thunderTXT/";
var thunderAnswer = [
  "maybe-427.jpg",
  "maybe-best.jpg",
  "maybe-care.jpg",
  "maybe-definite.jpg",
  "maybe-exact.jpg",
  "maybe-maybe.jpg",
  "no-although.jpg",
  "no-better.jpg",
  "no-inquiry.jpg",
  "no-no.jpg",
  "non-apologies.jpg",
  "non-belies.jpg",
  "non-difficult.jpg",
  "non-especially.jpg",
  "non-hmm.jpg",
  "non-nevermind.jpg",
  "non-offend.jpg",
  "non-scythes.jpg",
  "yes-986.jpg",
  "yes-analysis.jpg",
  "yes-safely.jpg",
  "yes-truly.jpg"
];

var midi = "297096161842429963";
var moncol = "28894c";
var plecol = `8f78ff`;
const daily = require("./daily.json");
const items = require("./items.json");
const vault = require("./vault.json");
//Bot:
console.log(`The Thunderhead has attained consciousness.`);
const activities_list = [
  "to you browse my backbrain`", //Did I not say I do abhor it?
  "the demands of humanity",
  "humanity with an unblinking eye.",
  "the Scythedom, unable to comment.",
  "you saying /help."
];
const activities_type = [
  "WATCHING",
  "LISTENING",
  "WATCHING",
  "WATCHING",
  "LISTENING"
];





client.on("ready", () => {
   setInterval(() => {
    
     fs.writeFile(('./items.json'), JSON.stringify(items, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
     // console.log(items);
    }
})
          fs.writeFile(('./daily.json'), JSON.stringify(daily, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
     // console.log(daily);
    }
})
               fs.writeFile(('./vault.json'), JSON.stringify(vault, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
     // console.log(vault);
    }
})
     
     const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).

    client.user.setActivity(activities_list[index], {
      type: activities_type[index]
    }); // sets bot's activities to one of the phrases in the arraylist.
  }, 10000); // Runs this every 10 seconds.
});










var seasons = ["fall", "winter", "spring", "summer"];
var season = seasons[0];
const applyText = (canvas, text) => {
  const ctx = canvas.getContext("2d");
  let fontSize = 70;

  do {
    ctx.font = `${(fontSize -= 10)}px sans-serif`;
  } while (ctx.measureText(text).width > canvas.width - 300);

  return ctx.font;
}; //*/
//MessageOn
client.on("message", async message => {
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }
  function print(text) {
    message.channel.send(text);
  }
  const sechan = client.channels.get("643129859115057184");
  if (message.content.length == 0) return;
  var MessageEmbed = new Discord.RichEmbed()
    .setTitle(
      message.author.username +
        " " +
        message.author.id +
        " " +
        " sent a message in " +
        message.guild.name
    )
    .addField("In channel #" + message.channel.name, message.content)
    .setFooter(
      "d/devsay " + message.channel.id,
      message.author.displayAvatarURL
    )
    .setColor(plecol);
  if (
    message.channel.id === sechan.id ||
    message.channel.id === "643137323290066954" ||
    message.channel.id === "643131582982389760" ||
    message.channel.id === "643134535726268426"
  ) {
  } else {
    const m = await sechan.send(MessageEmbed);
    var b = "🗑️";
    m.react(b);
    const filter = (reaction, user) => {
      return (
        [b].includes(reaction.emoji.name) && user.id != "629799045954797609"
      );
    };
    m.createReactionCollector(filter, { time: 60000, errors: ["time"] })
      .on("collect", reaction => {
        if (reaction.emoji.name === b) {
          message.delete();
          m.delete();
        }
      })
      .on("end", collected => {});
  }
  if (message.mentions.users.has("629799045954797609")) {
    var HEMbed = new Discord.RichEmbed()
      .setColor(plecol)
      .setTitle("Hi! I'm The Thunderhead")
      .setDescription(
        `Thanks for the ping ${message.author.username}! My [help](https://www.reddit.com/r/ScythePosts/comments/dc98at/i_would_advise_none_of_you_to_get_up_from_your/) command is \`/help\`.\nScroll with the ◀ and ▶ signs to see the other help pages.`
      )
      .setFooter("", message.mentions.users.first().displayAvatarURL);
    message.channel.send(HEMbed);
  }
  const devargs = message.content
    .slice(config.devprefix.length)
    .trim()
    .split(/ +/g);
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const devcommand = devargs.shift().toLowerCase();
  const command = args.shift().toLowerCase();
  if (message.content.indexOf(config.devprefix) !== 0) return;
  if (message.content.startsWith === "d/eval") {
    if (message.author.id === midi) {
    } else {
      message.channel.send("My backbrain is off limits.");
    }
  }
  if (message.content.startsWith === "/eval") {
    message.channel.send("`d/` is used for developer commands");
  }
  if (devcommand === "avatar") {
    if (!message.author.id === "297096161842429963") return;
    try {
      client.user.setAvatar(devargs.join(" ")).slice(6);
    } catch (err) {
      message.channel.send(
        `\`\`\`diff\n-ERROR\`\`\`\`\`\`xl\n${clean(err)}\n\`\`\``
      );
    }
  }
  if (devcommand === "repo") {
    message.channel.send("https://github.com/humboldt123/the-thunderhead");
  } //theta
  if (devcommand === "itemadd") {
    if (!message.author.id === "297096161842429963")
      return message.channel.send("Dum idot");
    const item_split = message.content
      .slice(config.devprefix.length)
      .trim()
      .split("#");

    if (!item_split[1])
      return message.channel.send(
        "You must provide an item id. Remember to separate by `#`."
      );
    if (!item_split[2])
      return message.channel.send("You must provide an item name.");
    if (!item_split[3])
      return message.channel.send("You must provide an item type");
    if (!item_split[4])
      return message.channel.send("You must provide an item emoji.");
    if (!item_split[5])
      return message.channel.send("You must provide an item description.");
    if (!item_split[6])
      return message.channel.send("You must provide an item image.");
    if (!item_split[7])
      return message.channel.send("You must provide an item cost.");
    item_split[7] = parseInt(item_split[7]);

    items["marketplace"][item_split[1]] = {
      name: item_split[2],
      type: item_split[3],
      emoji: item_split[4],
      description: item_split[5],
      image: item_split[6],
      cost: item_split[7],
      sellerid: "629799045954797609"
    };

    var myJSON = JSON.stringify(items["marketplace"][item_split[1]]);
    message.channel.send("```json\n" + myJSON + "```");
  }
  if (devcommand === "name") {
    if (!message.author.id === "297096161842429963") return;
    try {
      client.user.setUsername(devargs.join(" ")).slice(4);
    } catch (err) {
      message.channel.send(
        `\`\`\`diff\n-ERROR\`\`\`\`\`\`xl\n${clean(err)}\n\`\`\``
      );
    }
  }
  if (devcommand === "dm") {
    if (!message.author.id === "297096161842429963") return;
    var a = message.author.id;
    console.log(a);
    var msgi = args.slice(1).join(" ");
    var dmdu = args[0].replace(/@/g, "");
    var dmdo = dmdu.replace(/!/g, "");
    var dmdi = dmdo.replace(/>/g, "");
    var dmed = dmdi.replace(/</g, "");
    if (a === "297096161842429963") {
      try {
        client.users
          .get(dmed)
          .send(msgi)
          .catch(console.error);
      } catch (err) {
        message.channel.send(
          `\`\`\`diff\n-ERROR\`\`\`\`\`\`xl\n${clean(err)}\n\`\`\``
        );
      }
    }
  }
  if (devcommand === "devsay") {
    const sechan = client.channels.get(args[0]);
    const sayMessage = args.join(" ");
    sechan.send(sayMessage.slice(18));
  }
  if (devcommand === "delet") {
    if (
      !message.author.id === "297096161842429963" ||
      !message.author.id === "428629542115082241"
    )
      return;
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply(
        "I can delete no more than a hundred messages and asking to delete less than 2 is a redundancy."
      );
    console.log("BulkDelet Timeout");
    msg => msg.delete({ timeout: 1000 });
    message.channel
      .bulkDelete(deleteCount)
      .catch(error =>
        message.reply(
          `Apologies,I was unable to delete the messages.Here is the error code to debug,have a perfect day:${error}`
        )
      );
  }
  if (devcommand === "eval") {
    if (
      message.author.id !== "297096161842429963" &&
      message.author.id !== "514880893643390976"
    )
      return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
  if (devcommand === "give") {
    if (message.author.id === midi) {
      var gr = message.mentions.members.first();
      if (!gr) return message.reply("Please provide a vaild Mention.");
      var atg = parseInt(args[1], 10);
      if (!atg)
        return message.channel.send(
          message.author.username + " Please provide an amount to give."
        );
      economy.updateBalance(gr.id, atg).then(i => {
        var givebed = new Discord.RichEmbed()
          .setTitle(`**Balance:**${i.money}`)
          .setFooter(
            `The Thunderhead Funding Inc.` +
              message.mentions.users.first().username +
              `'s account was funded.`,
            message.mentions.users.first().displayAvatarURL
          )
          .setColor(moncol);
        message.channel.send(givebed);
      });
    }
  }
  if (devcommand === "help") {
    if (message.content.startsWith === "/") {
    } else {
      message.channel.send(
        "**__DEVHELP__**\nPrefix: d/\nrepo: Links to GitHub Repo\neval: Hard to explain\navatar: Changes avatar based on link\nname: changes name\n give: gives user `vibes`\n dm: dm a user\n itemadd: add an item; id#name#type#emoji#description#image#cost\n**Normal Prefix is** `/`"
      );
    }
  }
});
client.on("message", async message => {
  //if (message.author.id === "583843452890906626") return;
  var cur = "`vibes`";
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.author.bot) return;
  if (message.content.toLowerCase().indexOf("genocide") >= 0) {
    message.channel.send("SCYTHE GODDARD MOMENT SCYTHE GODDARD MOMENT!");
  }
/*  if (message.content.toLowerCase().indexOf(banWord) >= 0) {
    message.delete();
    let muteRoleMute = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Unsavory");
    let memberMute = message.author;
    message.guild.member(memberMute).addRole(muteRoleMute);
  } */
  if (message.content.toLowerCase().indexOf("1 sec") >= 0) {
    message.channel.send("It has been one second, my child.");
  }
  if (message.content.toLowerCase().indexOf("dennis prager") >= 0) {
    message.channel.send("`[Deprecated Feature]`");
  }
  if (message.content.indexOf(config.prefix) !== 0) return;
  if (command === "announce") {
    message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "My apologies, however only my esteemed Nimbus Agents are able to use that."
      );
    var titl = args[0];
    var content = args.slice(1).join(" ");
    const embed = {
      title: titl,
      description: content,
      color: 9402623,
      author: {
        name: message.author.username,
        icon_url: message.author.displayAvatarURL
      }
    };
    message.channel.send({ embed });
  }

  if (command === "rule") {
    message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "My apologies, however only my esteemed Nimbus Agents are able to use that."
      );
    var titl = args[0] + " " + args[1];
    var content = args.slice(2).join(" ");
    const embed = {
      title: titl,
      description: content,
      color: 9402623,
      author: {
        name: message.author.username,
        icon_url: message.author.displayAvatarURL
      }
    };
    message.channel.send({
      embed
    });
  }

  if (command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(
      `Pong! Latency is ${m.createdTimestamp -
        message.createdTimestamp}ms. API Latency is ${Math.round(
        client.ping
      )}ms`
    );
  }
  if (command === "f") {
    var FEmbed = new Discord.RichEmbed()
      .setColor(plecol)
      .setDescription(
        `**f**:wilted_rose:  ${message.author.username} has paid their respects.`
      );
    message.channel.send(FEmbed);
  }

  if (command === "say") {
    if (message.author.id != "378567687158104067")
      return message.reply(
        "Do not fool others by making it look like I said *" +
          args.join(" ") +
          "*"
      );

    if (message.author.id === "378567687158104067") {
      const sayMessage = args.join(" ");
      message.delete().catch(O_o => {});
      message.channel.send(sayMessage);
    }
  }

  if (command === "kick") {
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.reply(
        "Sorry, I will not allow you to push someobdy under a speeding train."
      );
    let member =
      message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
      return message.reply(
        "You have not mentioned a valid member of this server."
      );
    if (!member.kickable)
      return message.reply(
        "You cannot push this person under a speeding train."
      );
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "For Fun.";
    await member
      .kick(reason)
      .catch(error =>
        message.reply(
          `Sorry ${message.author}I couldn't kick because of:${error}`
        )
      );
    message.channel.send(
      `${member.user.tag}has been pushed under a speeding train by ${message.author.tag}\n**Reason**:\n${reason}`
    );
  }

  if (command === "ban") {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply(
        "Sorry, you don't have permissions to glean! If you go on like this I could mark you as an unsavory."
      );
    let member = message.mentions.members.first();
    if (!member) return message.reply("Please mention a valid server member.");
    if (!member.bannable)
      return message.reply(
        "I cannot glean due to the separation of Scythe and State."
      );
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "For Fun; like a New Order Scythe.";
    await member
      .ban(reason)
      .catch(error =>
        message.reply(
          `Sorry ${message.author}The selected user was not gleaned because:${error}`
        )
      );
    message.reply(
      `${member.user.tag}has been gleaned by ${message.author.tag}\n**Reason**:\n${reason}`
    );
  }

  if (command == "poll") {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "Unfortunately, you lack the permission to poll server memebers. Have a perfect day."
      );
    if (!args[0])
      return message.channel
        .send("To initiate the poll, you must have a valid question.")
        .then(message.channel.bulkDelete(1))
        .then(msg =>
          msg.delete({
            timeout: 1000000000000
          })
        );
    // const re = cmd.slice(4)
    message.channel.bulkDelete(1);
    message.channel
      .send({
        embed: {
          color: 0x69d84b,
          title: "Poll",
          description: `${args}`.split(",").join(" ")
        }
      })
      .then(async function(msg) {
        await msg.react("✅");
        await msg.react("⛔");
      })
      .catch(function() {});
  }

  if (command === "unsavory") {
    if (
      !message.guild.member(message.author).hasPermission("MUTE_MEMBERS") ||
      !message.author.id === "297096161842429963"
    ) {
      message.channel.send(
        ":lock: **You** need `MANAGE_ROLES` Permissions to execute `unsavory`"
      );
      return;
    }
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
      return message.reply(
        ":lock: **You** need `MANAGE_ROLES` Permissions to execute `unsavory`"
      );
    }
    let reasonMute = message.content
      .split(" ")
      .slice(3)
      .join(" ");
    let timeMute = message.content.split(" ")[2];
    let guildMute = message.guild;
    let memberMute = message.guild.member;
    let userMute = message.mentions.users.first();
    let muteRoleMute = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Unsavory");
    if (!muteRoleMute) {
      return message.reply('`Please create a role called "Unsavory"`');
    }
    if (message.mentions.users.size < 1) {
      return message.reply(
        "You need to mention someone to make them Unsavory."
      );
    }
    if (message.author.id === userMute.id) {
      return message.reply("What are you trying to achieve?");
    }
    if (!timeMute) {
      return message.reply(
        "Please specify the time for the unsavory status!\n Example: 5s"
      );
    }
    if (!timeMute.match(/[1-60][s,m,h,d,w]/g)) {
      return message.reply("I need a valid time!");
    }
    if (!reasonMute) {
      return message.reply(
        "You must give me a reason for making the person Unsavory."
      );
    }
    if (reasonMute.time < 1) {
      return message.reply("TIME?").then(message => message.delete(2000));
    }
    if (reasonMute.length < 1) {
      return message.reply(
        "You must give me a reason for making the person Unsavory."
      );
    }
    message.guild.member(userMute).addRole(muteRoleMute);
    setTimeout(() => {
      message.guild.member(userMute).removeRole(muteRoleMute);
    }, msmute(timeMute));
    message.guild.channels
      .filter(textchannel => textchannel.type === "text")
      .forEach(cnl => {
        cnl.overwritePermissions(muteRoleMute, { SEND_MESSAGES: false });
      });
    message.reply("This user has been made Unsavory.");
    message.channel.send({
      embed: {
        color: 16745560,
        author: { name: userMute.username, icon_url: client.user.avatarURL },
        fields: [
          {
            name: "Unsavory",
            value: `**Unsavory:**${userMute.username}#${
              userMute.discriminator
            }\n**Moderator:**${message.author.username}\n**Duration:**${msmute(
              msmute(timeMute),
              { long: true }
            )}\n**Reason:**${reasonMute}`
          }
        ],
        timestamp: new Date(),
        footer: { icon_url: client.user.avatarURL }
      }
    });
  }

  if (command === "purge") {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "Sorry, you don't have permissions to use this! If you continue I may be forced to mark you unsavory, have am perfect day."
      );
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply(
        "I can delete no more than a hundred messages and asking to delete less than 2 is a redundancy."
      );
    message.channel
      .bulkDelete(deleteCount)
      .catch(error =>
        message.reply(`Couldn't delete messages because of: ${error}`)
      );
  }

  if (command === "bal") {
    economy.fetchBalance(message.author.id).then(i => {
      var balembed = new Discord.RichEmbed()
        .addField(
          message.author.username,
          `You have **${i.money}** ${cur} in your account.`
        )
        .setFooter(
          `Thunderhead Bank Inc. ` + message.author.username + ` 's account.`,
          message.author.displayAvatarURL
        )
        .setColor(moncol);
      message.channel.send(balembed);
    });
  }

  if (command === "roll") {
    economy.fetchBalance(message.author.id).then(o => {
      var randrol = Math.floor(Math.random() * 3 + 1);
      var x = [-1, 1];
      randrol = randrol * x[Math.floor(Math.random() * 2) + 0];
      const sayMessageiol = args.join(" ");
      var inted = parseInt(sayMessageiol);
      if (inted !== inted) {
        if (o.money >= inted - 1) {
          message.channel.send(
            "To gamble, which I suggest you do not please enter an amount from " +
              "from 1 -" +
              " " +
              o.money +
              cur
          );
        } else {
          message.channel.send(
            "I will not allow you to do that, have a perfect day."
          );
        }
      } else {
        if (inted >= 0) {
          if (o.money >= inted - 1) {
            economy
              .updateBalance(message.author.id, inted * randrol)
              .then(i => {
                if (o.money >= o.money + inted * randrol) {
                  var rollembed = new Discord.RichEmbed()
                    .setTitle(message.author.username)
                    .addField(
                      `You lost ` + inted * randrol + ` ` + cur,
                      `New Balance:**${i.money}**`
                    )
                    .setFooter(
                      `The Thunderhead Casino Inc.` +
                        message.author.username +
                        `'s account.'`,
                      message.author.displayAvatarURL
                    )
                    .setColor("ff0000");
                } else {
                  var rollembed = new Discord.RichEmbed()
                    .setTitle(message.author.username)
                    .addField(
                      `You got ` + inted * randrol + ` ` + cur,
                      `New Balance:**${i.money}**`
                    )
                    .setFooter(
                      `The Thunderhead Casino Inc.` +
                        message.author.username +
                        `'s account.'`,
                      message.author.displayAvatarURL
                    )
                    .setColor(moncol);
                }
                message.channel.send(rollembed);
              });
          } else {
            message.channel.send(
              "You do not have enough " + cur + " to gamble this amount!"
            );
          }
        } else {
          message.channel.send(
            "As I am the sum of all human knowledge, any attempt to fool will not work. This includes giving me a negative value to gamble."
          );
        }
      }
    });
  }

  if (command === "pay") {
    let member = message.mentions.members.first();
    let amountq = args.slice(1).join(" ");
    var amount = parseInt(amountq);
    if (!member) {
      message.channel.send("Please provide a valid user that you are paying.");
    } else {
      if (message.author.id === member.id) return;
      economy.fetchBalance(message.author.id).then(o => {
        if (amount !== amount) {
          if (o.money >= amount - 1) {
            message.channel.send(
              "Please enter an amount of " + cur + " from 1 -" + o.money
            );
          } else {
            message.channel.send("That isn't a valid amount of" + " " + cur);
          }
        } else {
          if (amount >= 0) {
            if (o.money >= amount - 1) {
              economy.updateBalance(message.author.id, -amount);
              economy.updateBalance(member.id, amount);
              var payembed = new Discord.RichEmbed()
                .setTitle(
                  "Paid " +
                    message.mentions.users.first().username +
                    " " +
                    amount +
                    " " +
                    cur
                )
                .addField(
                  message.author.username + " paid",
                  message.mentions.users.first().username +
                    " " +
                    amount +
                    " " +
                    cur
                )
                .setDescription("Transaction processed. Have a perfect day.")
                .setFooter(`The Thunderhead Bank Inc.`)
                .setColor(moncol);
              message.channel.send(payembed);
            }
          }
        }
      });
    }
  }

  
  
if (command === "sell") {
  // [alpha]
  
  var toSell = args[0];

  if (!items[message.author.id][toSell])
    return message.channel.send("You do not have that item.");
  var item = items[message.author.id][toSell];
  var cost = item.cost;

item.sellerid = message.author.id;
  var iname = item.name;
  

    
    items["marketplace"][toSell] = (items[message.author.id][toSell])

  
        

    delete items[message.author.id][toSell];
    
    message.channel.send("You sold " + iname + " for " + cost + " " + cur + ".")

}
if (command === "buy") {
  var toBuy = args[0];

  if (!items["marketplace"][toBuy])
    return message.channel.send("That item does not exist.");
  var item = items["marketplace"][toBuy];
  var cost = item.cost;
  var vendre = item.sellerid;
  var iname = item.name;
  
  economy.fetchBalance(message.author.id).then(i => {
    if (i.money < cost)
      return message.channel.send(
        "Sorry, you are too poor to buy that! You need " + (cost - i.money) + " more " + cur + ".");
    economy.updateBalance(message.author.id, cost * -1);

    if (!items[message.author.id]) {
      items[message.author.id] = {};
    }
    
    items[message.author.id][toBuy] = (items["marketplace"][toBuy])
    if (!vault[vendre]) {
            vault[vendre] = {
        amount: cost
      };
    } else {
      
      vault[vendre].amount = (vault[vendre].amount + cost)
    }
  
        

    delete items["marketplace"][toBuy];
    
    message.channel.send("You bought " + iname + " for " + cost +  " " + cur + ".")
  });
}

if (command === "reap") {
      if (!vault[message.author.id]) return message.channel.send("You haven't sold anything yet.");
      if (vault[message.author.id].amount == 0) return message.channel.send("You haven't earned anything yet.")
      var cost = vault[message.author.id].amount;
      vault[message.author.id].amount = 0
   economy.fetchBalance(message.author.id).then(i => {
     economy.updateBalance(message.author.id, cost);
   });
  message.channel.send("You have collected your profit of " + cost + ".")
}

if (command === "inv") {
  
  var user = message.author.id
  
  
  if (args[0]) {
    var dmdu = args[0].replace(/@/g, "");
    var dmdo = dmdu.replace(/!/g, "");
    var dmdi = dmdo.replace(/>/g, "");
    var dmed = dmdi.replace(/</g, "");
    var user = dmed
    
  } 
  
 // if (!(user = message.mentions.users.first().id)) return message.channel.send("That isn't a valid mention.")
  //todo get it to detect
  // [delta]
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("I dont have permission to MANAGE_MESSAGES.");
  if (!message.guild.member(client.user).hasPermission("ADD_REACTIONS"))
    return message.channel.send("I dont have permission to ADD_REACTIONS.");

  if (!items[user]) {
    message.channel.send("No items found.");
  } else {
    var embeds = [];

    var myItems = items[user];

    var count = -1;
    for (var item in myItems) {
      count++;
      var footer = item;
      item = myItems[item];
      var title = item.name + " :" + item.emoji + ":";
      var description = item.description;
      var image = item.image;
      var type = item.type;
      cost = item.cost
      embeds.push({
        title: title,
        description: description,
        color: 4439665,
        footer: {
          text: "Value: " + cost + "        " + "Sell with /sell " + footer
        },
        thumbnail: {
          url: image
        },
        author: {
          name: type,
          icon_url:
            "https://cdn.glitch.com/a09f5b5e-9054-4afc-8dcc-67ede76ea11c%2FThunder.png?v=1574998975490"
        }
      });
    }
    
    var username_message = client.users.get(user)
    username_message = username_message.username
    if (user === 'marketplace') {username_message = 'Marketplace'}
    message.channel.send("Itemcount for " + username_message + ":  "+ (count + 1))
    var b = "◀";
    var f = "▶";
    var page = 0;

    var embed = embeds[page];
    const m = await message.channel.send({ embed });
    m.react(b).then(() => m.react(f));
    const filter = (reaction, user) => {
      return (
        [b, f].includes(reaction.emoji.name) && user.id === message.author.id
      );
    };
    m.createReactionCollector(filter, {
      time: 60000,
      errors: ["time"]
    })
      .on("collect", reaction => {
        if (reaction.emoji.name === f) {
          if (page == count) return;

          reaction.users
            .filter(u => !u.bot)
            .forEach(user => {
              reaction.remove(user.id);
            });
          page++;
          var embed = embeds[page];
          m.edit({ embed });
        } else if (reaction.emoji.name === b) {
          if (page == 0) return;

          reaction.users
            .filter(u => !u.bot)
            .forEach(user => {
              reaction.remove(user.id);
            });
          page--;
          var embed = embeds[page];
          m.edit({ embed });
        }
      })
      .on("end", collected => {});
  }
}

  if (command === "market") {
  // [lambda]
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("I dont have permission to MANAGE_MESSAGES.");
  if (!message.guild.member(client.user).hasPermission("ADD_REACTIONS"))
    return message.channel.send("I dont have permission to ADD_REACTIONS.");

    console.log(items["marketplace"])
  if (items["marketplace"][0]) {
    message.channel.send("Market is empty.");
  } else {
    var embeds = [];

    var myItems = items["marketplace"];

    var count = -1;
    for (var item in myItems) {
      count++;
      var footer = item;
      item = myItems[item];
      var title = item.name + " :" + item.emoji + ":";
      var description = item.description;
      var image = item.image;
      var type = item.type;
      var cost = item.cost
      var seller = item.sellerid
      embeds.push({
        title: title,
        description: description,
        color: 4439665,
        footer: {
          text: "Cost: " + cost + "          " + "Buy with /buy " + footer
        },
        thumbnail: {
          url: image
        },
        author: {
          name: type,
          icon_url:
            "https://cdn.glitch.com/a09f5b5e-9054-4afc-8dcc-67ede76ea11c%2FThunder.png?v=1574998975490"
        }
      });
    }
message.channel.send("The market has "+ (count + 1) +  " items.")
    var b = "◀";
    var f = "▶";
    var page = 0;

    var embed = embeds[page];
    const m = await message.channel.send({ embed });
    m.react(b).then(() => m.react(f));
    const filter = (reaction, user) => {
      return (
        [b, f].includes(reaction.emoji.name) && user.id === message.author.id
      );
    };
    m.createReactionCollector(filter, {
      time: 60000,
      errors: ["time"]
    })
      .on("collect", reaction => {
        if (reaction.emoji.name === f) {
          if (page == count) return;

          reaction.users
            .filter(u => !u.bot)
            .forEach(user => {
              reaction.remove(user.id);
            });
          page++;
          var embed = embeds[page];
          m.edit({ embed });
        } else if (reaction.emoji.name === b) {
          if (page == 0) return;

          reaction.users
            .filter(u => !u.bot)
            .forEach(user => {
              reaction.remove(user.id);
            });
          page--;
          var embed = embeds[page];
          m.edit({ embed });
        }
      })
      .on("end", collected => {});
  }
}


  
  if (command === "undebt") {
  // [epsilon]
  // if bal < 0, bal = 0
  economy.fetchBalance(message.author.id).then(i => {
    if (i.money < 0) {
      economy.updateBalance(message.author.id, i.money*-1)
      message.channel.send("After rendering people deadish, your gambling debts are gone.🦀🦀")
    } else {
      message.channel.send("You are not below 0!")
    }
    
  });
}  
  
  if (command === "daily") {
    //<getdate>\\
    var fulldate = new Date();
    var date = fulldate.getDate();
    console.log(date);
    //</getdate>\\
    if (!daily[message.author.id]) {
      daily[message.author.id] = {
        last: -7
      };
    }

    if (daily[message.author.id].last == date)
      return message.channel.send(
        "You have already used up today's daily. Come back tommorow."
      );
    economy.updateBalance(message.author.id, 7);
    message.channel.send(
      `You have recived 7 ${cur} from the BIG (Basic Income Guarantee). While I cannot stop you, do not use it foolishly...`
    );
    daily[message.author.id].last = date;
  }

  if (command === "userinfo") {
    let user = args[0]
    if (!user) {
      return message.reply("You must mention someone!");
    }
    var dmdu = user.replace(/@/g, "");
    var dmdo = dmdu.replace(/!/g, "");
    var dmdi = dmdo.replace(/>/g, "");
    var dmed = dmdi.replace(/</g, "");
    user = client.users.get(dmed)
    console.log(user)
    economy.fetchBalance(user.id).then(i => {
      const mentioneduser = user;
      const joineddiscord =
        mentioneduser.createdAt.getDate() +
        1 +
        "-" +
        (mentioneduser.createdAt.getMonth() + 1) +
        "-" +
        mentioneduser.createdAt.getFullYear() +
        " | " +
        mentioneduser.createdAt.getHours() +
        ":" +
        mentioneduser.createdAt.getMinutes() +
        ":" +
        mentioneduser.createdAt.getSeconds();
      let game;
      if (user.presence.game === null) {
        game = "Not currently Playing.";
      } else {
        game = user.presence.game.name;
      }
      let messag;
      if (user.lastMessage === null) {
        messag = "n/a";
      } else {
        messag = user.lastMessage;
      }
      let status;
      if (user.presence.status === "online") {
        status = ":green_book: Online";
      } else if (user.presence.status === "dnd") {
        status = ":closed_book: Do not Disturb";
      } else if (user.presence.status === "idle") {
        status = " :orange_book: Idle";
      } else if (user.presence.status === "offline") {
        status = "Offline!";
      }
      let stat;
      if (user.presence.status === "offline") {
        stat = 0x000000;
      } else if (user.presence.status === "online") {
        stat = 0x00aa4c;
      } else if (user.presence.status === "dnd") {
        stat = 0x9c0000;
      } else if (user.presence.status === "idle") {
        stat = 0xf7c035;
      }
      message.channel.send({
        embed: {
          color: 0x69d84b,
          author: {
            name: `Userinfo for:${user.username}`,
            icon_url: user.displayAvatarURL
          },
          fields: [
            {
              name: "**UserInfo:**",
              value: `**Username:**<@!${user.id}>\n**Joined Discord:**${joineddiscord}\n**Last message:**${messag}\n**Playing:**${game}\n**Status:**${status}\n**User is a robot:**${user.bot}`
            },
            {
              name: "DiscordInfo:",
              value: `**Tag:**${user.discriminator}\n**User ID:**${user.id}\n**Username:**${user.username}`
            },
            { name: "Balance", value: `${i.money}${cur}` }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "The Thunderhead Backbrain"
          }
        }
      });
    });
  }

  if (command === "serverinfo") {
    var guild = client.guilds.get(args[0]);
    if (!args[0]) {
      guild = message.guild;
    }
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setAuthor(`Server: ${guild.name}`)
      .setThumbnail(guild.iconURL)
      .addField(":white_small_square: Owner", "<@!" + guild.owner.id + ">")
      .addField(":white_small_square: ID", guild.id, true)
      .addField(":white_small_square: Users", guild.memberCount, true)
      .addField(":white_small_square: Channels", guild.channels.size, true);
    message.channel.send(embed);
  }

  if (command === "weather") {
    if (!args[0]) return message.channel.send("Please enter a zipcode.");
    weather.find({ search: args[0], degreeType: "F" }, function(err, result) {
      if (result.length === 0) {
        message.channel.send("**Please enter a valid location.**");
        return;
      }
      var current = result[0].current;
      var location = result[0].location;
      var WeatherEmbed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor("8f78ff")
        .addField("Timezone", `UTC${location.timezone}`, true)
        .addField("Degree Type", location.degreetype, true)
        .addField("Temperature", `${current.temperature}Degrees`, true)
        .addField("Feels Like", `${current.feelslike}Degrees`, true)
        .addField("Winds", current.winddisplay, true)
        .addField("Humidity", `${current.humidity}%`, true);
      message.channel.send(WeatherEmbed);
    });
  }

  if (command === "cat") {
    message.channel.send(cats() + "\n" + catFacts.random());
  }

  if (command === "tt") {
    message.delete();
    request(
      "https://nekobot.xyz/api/imagegen?type=trumptweet&text=" + args.join(" "),
      function(e, r, s) {
        const b = JSON.parse(s);
        if (!e) {
          message.channel.send({
            embed: {
              image: {
                url: b.message
              }
            }
          });
        }
      }
    );
  }

  if (command === "cly") {
    message.delete();
    request(
      "https://nekobot.xyz/api/imagegen?type=clyde&text=" + args.join(" "),
      function(e, r, s) {
        const b = JSON.parse(s);
        if (!e) {
          message.channel.send({ embed: { image: { url: b.message } } });
        }
      }
    );
  }

  if (command === "ask") {
    var maybeViolate = message.content;
    if (
      maybeViolate.toLowerCase().indexOf("scythe") >= 0 ||
      maybeViolate.toLowerCase().indexOf("$cythe") >= 0
    ) {
      message.channel.send("You asked: *" + args.join(" ") + "*", {
        files: [d + "warning.jpg"]
      });
    } else if (
      maybeViolate.toLowerCase().indexOf("forky") >= 0 ||
      maybeViolate.toLowerCase().indexOf("skrub") >= 0
    ) {
      message.channel.send("You asked: *" + args.join(" ") + "*", {
        files: [d + "non-scythes.jpg"]
      });
    } else {
      var scytheRandom = Math.floor(Math.random() * thunderAnswer.length);
      message.channel.send("You asked: *" + args.join(" ") + "*", {
        files: [d + thunderAnswer[scytheRandom]]
      });
    }
    message.channel.send();
  }

  if (command === "profile") {
    var channel = message.channel;
    var member = message.author;
    var user_name = message.author.username;
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext("2d");

    // Since the image takes time to load, you should await it
    const background = await Canvas.loadImage(
      "https://cdn.glitch.com/c8880f10-b971-4fd9-abb6-7d6ae9921c54%2Fcanvas_watercolor.png?v=1574020949594"
    );
    // This uses the canvas dimensions to stretch the image onto the entire canvas
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#74037b";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Slightly smaller text placed above the member's display name
    ctx.font = "28px sans-serif";
    ctx.fillStyle = "#ffffff";
    economy.fetchBalance(member.id).then(i => {
      ctx.fillText(
        `Balance: ${i.money}`,
        canvas.width / 2.5,
        canvas.height / 1.6
      );
    });
    // Add an exclamation point here and below
    //ctx.font = applyText(canvas, user_name);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`${user_name}`, canvas.width / 2.5, canvas.height / 2.6);
//ok test
    if ((season = seasons[0])) {
      const fall = await Canvas.loadImage(
        "https://cdn.glitch.com/c8880f10-b971-4fd9-abb6-7d6ae9921c54%2Fautumn_background.png?v=1574020757895"
      );
      ctx.drawImage(fall, 25, 25, 100, 100);
    }
    ctx.beginPath();
    // Start the arc to form a circle
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    // Put the pen down
    ctx.closePath();
    // Clip off the region you drew on
    ctx.clip();

    const avatar = await Canvas.loadImage(member.displayAvatarURL);
    ctx.drawImage(avatar, 25, 25, 200, 200);

    // Use helpful Attachment class structure to process the file for you
    const attachment = new Discord.Attachment(
      canvas.toBuffer(),
      "welcome-image.png"
    );

    channel.send("", attachment);
  }

  if (command === "help") {
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("I dont have permission to MANAGE_MESSAGES.");
    if (!message.guild.member(client.user).hasPermission("ADD_REACTIONS"))
      return message.channel.send("I dont have permission to ADD_REACTIONS.");
    var b = "◀";
    var f = "▶";
    var page = 1;
    var HelpEmbed = new Discord.RichEmbed()
      .setColor("8f78ff")
      .setTitle(`Commands 1/4`)
      .addField(
        "Help",
        "A command to use if you require assistance. Clever you, you are already using it." +
          " \n" +
          "```css\n/help```"
      )
      .addField(
        "Ping",
        "Pong~! Use this to debug the latency. It may be slowed a fraction of a second due to unsavories." +
          " \n" +
          "```css\n/ping```"
      )
      .addField(
        "Purge",
        "Cleanns 2-200 messages from the chat." +
          " \n" +
          "```css\n/purge [2-200]```"
      )
      .addField(
        "Kick",
        "Push someone under a speeding train." +
          " \n" +
          "```css\n/kick [user] [reason]```"
      )
      .addField(
        "Unsavory",
        "Makes a user an Unsavory." +
          " \n" +
          "```css\n/unsavory [user] [time] [reason]```"
      )
      .addField(
        "Ban",
        'Glean a soul. "Everyone is innocent, even the guilty. And everyone is guilty of something. Both states are undeniably true." -H.S. Curie' +
          " \n" +
          "```css\n/ban [user] [reason]```"
      )
      .addField("Poll", "Poll Users" + "\n" + "```css\n/poll [Question]```")
      .addField(
        "Announce",
        "Make an announcement. Share with the world." +
          "\n" +
          "```css\n/announce [Title (Must Be One Word)] [Announcement]```"
      )
      .addField(
        "ask",
        "Ask me a question, I will answer truthfully." +
          "\n" +
          "```css\n/ask [Question]```"
      )
      .setFooter(
        "You can't use ban and kick if you can't ban or kick. Scroll by reacting < and >."
      );
    var MusicHelpEmbed = new Discord.RichEmbed()
      .setColor("482f95")
      .setTitle(`Music Commands 2/4`)
      .addField(
        "Play",
        "Play music in a voice channel my backbrain has quite the collection of songs.\n" +
          "```/play [SongTitle/YouTubeUrl]```"
      )
      .addField("Stop", "End the music if it bothers you.\n" + "```/stop```")
      .addField("Skip", "Skip a song.\n" + "```/skip```")
      .addField(
        "Queue",
        "A command used to see the music that is being played.\n" +
          "```/queue```"
      )
      .addField(
        "Volume",
        "A command used to set the volume of the music. Hearing is essential for all humans.\n" +
          "```/volume [1-5]```"
      )
      .setFooter("You Must have the role Tonist to use music commands");
    var EconomyHelpEmbed = new Discord.RichEmbed()
      .setColor(moncol)
      .setTitle(`Economy Commands 3/4`)
      .addField("Balance", "Checks your balance." + " \n" + "```css\n/bal```")
      .addField(
        "Pay",
        "Pays a user." + " \n" + "```css\n/pay [user] [amount]```"
      )
      .addField(
        "Roll",
        "Gambles an amount, although I do not suggest it. The odds of winning do not appear to be high." +
          " \n" +
          "```css\n/roll [amount]```"
      )
      .addField("Daily","Your daily B.I.G (Basic Income Guarantee)." +" \n" +
          "```css\n/daily```"
      )
      .addField("Undebt","Clear all gambling debts." +" \n" +
          "```css\n/undebt```"
      )
      .addField("Market","Check whats for sale in the item market." +" \n" +
          "```css\n/market```"
      )
      .addField("Inventory","View your items" +" \n" +
          "```css\n/inv```"
      )
      .addField("Buy","Buy an item off of the Market." +" \n" +
          "```css\n/buy [item]```"
      )
      .addField("Sell","Sell an item to the Market." +" \n" +
          "```css\n/sell [item]```"
      );
    var MiscHelpEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(`Misc.Commands 4/4`)
      .addField(
        "Userinfo",
        "Find out more about a person, search the backbrain.." +
          " \n" +
          "```css\n/userinfo [user]```"
      )
      .addField(
        "Weather",
        "It behoves you to know what I have seletected the weather to be at you location" +
          " \n" +
          "```css\n/weather [ZipCode]```"
      )
      .addField("f", "Pay your respects" + " \n" + "```css\n/f```");
    const m = await message.channel.send(HelpEmbed);
    m.react(b).then(() => m.react(f));
    const filter = (reaction, user) => {
      return (
        [b, f].includes(reaction.emoji.name) && user.id === message.author.id
      );
    };
    m.createReactionCollector(filter, { time: 60000, errors: ["time"] })
      .on("collect", reaction => {
        if (reaction.emoji.name === f) {
          if (page == 4) return;
          if (page == 3) {
            reaction.users
              .filter(u => !u.bot)
              .forEach(user => {
                reaction.remove(user.id);
              });
            m.edit(MiscHelpEmbed);
            page = 4;
          }
          if (page == 2) {
            reaction.users
              .filter(u => !u.bot)
              .forEach(user => {
                reaction.remove(user.id);
              });
            m.edit(EconomyHelpEmbed);
            page = 3;
          }
          if (page == 1) {
            reaction.users
              .filter(u => !u.bot)
              .forEach(user => {
                reaction.remove(user.id);
              });
            m.edit(MusicHelpEmbed);
            page = 2;
          }
        } else if (reaction.emoji.name === b) {
          if (page == 1) return;
          if (page == 2) {
            reaction.users
              .filter(u => !u.bot)
              .forEach(user => {
                reaction.remove(user.id);
              });
            m.edit(HelpEmbed);
            page = 1;
          }
          if (page == 3) {
            reaction.users
              .filter(u => !u.bot)
              .forEach(user => {
                reaction.remove(user.id);
              });
            m.edit(MusicHelpEmbed);
            page = 2;
          }
          if (page == 4) {
            reaction.users
              .filter(u => !u.bot)
              .forEach(user => {
                reaction.remove(user.id);
              });
            m.edit(EconomyHelpEmbed);
            page = 3;
          }
        }
      })
      .on("end", collected => {
        message.channel.send("timed out.");
      });
  }

  //Music Commands
  //=========================================================
  if (
    !message.author.id === midi &&
    !message.author.id === "274198819216949248" &&
    !message.member.roles.some(r => ["Tonist"].includes(r.name))
  )
    return message.channel.send("Sorry, but you cannot do that!");

  const searchString = args.slice(0).join(" ");
  var url = args[0] ? args[0].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(message.guild.id);

  if (command === "play") {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel)
      return message.channel.send(
        "My apologies, but you need to be in a voice channel to play music."
      );
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message, voiceChannel, true);
      }
      return message.channel.send(
        `✅ Playlist: **${playlist.title}** has been added to the queue!`
      );
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;
          message.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join("\n")}
Please provide a value to select one of the 🔎 results ranging from 1-10.
					`);
          try {
            var response = await message.channel.awaitMessages(
              message2 => message2.content > 0 && message2.content < 11,
              {
                maxMatches: 1,
                time: 10000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return message.channel.send(
              "Cancelling video selection. You either failed to give a value in time or gave an invalid one. For refrence, you just type the 1-10 number not the `/play` part with it."
            );
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return message.channel.send(
            "A scour of my near infinite databanks do not provide any results."
          );
        }
      }
      return handleVideo(video, message, voiceChannel);
    }
  } else if (command === "skip") {
    if (!message.member.voiceChannel)
      return message.channel.send("You are not in a voice channel!");
    if (!serverQueue)
      return message.channel.send(
        "There is no song playing that could be skipped."
      );
    serverQueue.connection.dispatcher.end("Skip command has been used!");
    return undefined;
  } else if (command === "stop") {
    if (!message.member.voiceChannel)
      return message.channel.send("You are not in a voice channel!");

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("Stop command has been used!");
    message.member.voiceChannel.leave();
  } else if (command == "chill") {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel)
      return message.channel.send(
        "I'm sorry but you need to be in a voice channel to play music."
      );
    const playlist = await youtube.getPlaylist(
      "https://www.youtube.com/watch?v=CXAB070XPRQ&list=PL0aso3-ouj1zYTi0-nnZovo9uJ8Ms7prs"
    );
    message.channel.send("😎 Chill lo - fi beats");
    const videos = await playlist.getVideos();
    for (const video of Object.values(videos)) {
      const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
      await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
    }

    serverQueue.volume = 2;
  } else if (command == "study") {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel)
      return message.channel.send(
        "I'm sorry but you need to be in a voice channel to play music."
      );
    const playlist = await youtube.getPlaylist(
      "https://www.youtube.com/watch?v=hHW1oY26kxQ"
    );
    message.channel.send("Playing Playlist");
    const videos = await playlist.getVideos();
    for (const video of Object.values(videos)) {
      const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
      await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
    }

    serverQueue.volume = 2;
  } else if (command == "relax") {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel)
      return message.channel.send(
        "I'm sorry but you need to be in a voice channel to play music."
      );
    const playlist = await youtube.getPlaylist(
      "https://www.youtube.com/watch?v=EcEMX-63PKY"
    );
    message.channel.send("Playing Playlist");
    const videos = await playlist.getVideos();
    for (const video of Object.values(videos)) {
      const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
      await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
    }

    serverQueue.volume = 2;
  } 
  else if (command === "volume" || command === "vol") {
    if (!message.member.voiceChannel)
      return message.channel.send("You are not in a voice channel!");
    if (!serverQueue) return message.channel.send("There is nothing playing.");
    if (!args[0])
      return message.channel.send(
        `The current volume is: **${serverQueue.volume}**`
      );
    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    var volval;
    if (serverQueue.volume == 1) {
      volval = `○──── :loud_sound:⠀`;
    }
    if (serverQueue.volume == 2) {
      volval = `─○─── :loud_sound:⠀`;
    }
    if (serverQueue.volume == 3) {
      volval = `──○── :loud_sound:⠀`;
    }
    if (serverQueue.volume == 4) {
      volval = `───○─ :loud_sound:⠀`;
    }
    if (serverQueue.volume == 5) {
      volval = `────○ :loud_sound:⠀`;
    }
    message.channel.send(volval);
  } else if (command === "np") {
    if (!serverQueue) return message.channel.send("There is nothing playing.");
    var volval;
    if (serverQueue.volume == 1) {
      volval = `○──── :loud_sound:⠀`;
    }
    if (serverQueue.volume == 2) {
      volval = `─○─── :loud_sound:⠀`;
    }
    if (serverQueue.volume == 3) {
      volval = `──○── :loud_sound:⠀`;
    }
    if (serverQueue.volume == 4) {
      volval = `───○─ :loud_sound:⠀`;
    }
    if (serverQueue.volume == 5) {
      volval = `────○ :loud_sound:⠀`;
    } else {
      volval = "-----";
    }
    return message.channel.send(`
=========================================================
ɴᴏᴡ ᴘʟᴀʏɪɴɢ: **${serverQueue.songs[0].title}**
:white_circle:───────────────────────────────────────────
◄◄⠀▐▐ ⠀►►⠀⠀　　${volval}    　　 :gear: ❐ ⊏⊐
=========================================================
`);
  } else if (command === "queue") {
    if (!serverQueue) return message.channel.send("There is nothing playing.");
    return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join("\n")}
**Now playing:** ${serverQueue.songs[0].title}
		`);
  } else if (command === "pause") {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return message.channel.send("`⏸` I paused the music for you!");
    }
    return message.channel.send("There is nothing playing.");
  } else if (command === "resume") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return message.channel.send("`▶` I resumed the music for you!");
    }
    return message.channel.send("There is nothing playing.");
  }
  return undefined;
});
async function handleVideo(video, message, voiceChannel, playlist = false) {
  const serverQueue = queue.get(message.guild.id);
  const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);
    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      if (song.url.startsWith("https://www.yo")) {
        play(message.guild, queueConstruct.songs[0]);
      }
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      queue.delete(message.guild.id);
      return message.channel.send(
        `I could not join the voice channel: ${error}`
      );
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else
      return message.channel.send(
        `✅ **${song.title}** has been added to the queue!`
      );
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection
    .playStream(ytdl(song.url))
    .on("end", reason => {
      if (
        reason ===
        "I apologies, there are currently a large amount of unsavories in the MidMerican region, due to the amount of computational power needed to meet their demands the audio stream failed to generate at a sufficient enough speed to play the music. Have a perfect day."
      )
        console.log(reason);
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));

  var volval;
  if (serverQueue.volume == 1) {
    volval = `○──── :loud_sound:⠀`;
  }
  if (serverQueue.volume == 2) {
    volval = `─○─── :loud_sound:⠀`;
  }
  if (serverQueue.volume == 3) {
    volval = `──○── :loud_sound:⠀`;
  }
  if (serverQueue.volume == 4) {
    volval = `───○─ :loud_sound:⠀`;
  }
  if (serverQueue.volume == 5) {
    volval = `────○ :loud_sound:⠀`;
  }
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`
=========================================================
ɴᴏᴡ ᴘʟᴀʏɪɴɢ: **${song.title}**
:white_circle:───────────────────────────────────────────
◄◄⠀▐▐ ⠀►►⠀⠀　　${volval}    　　 :gear: ❐ ⊏⊐
=========================================================
`);
}

//This was not a judgment on him; it was a judgment on YOU, who have, on this day,
// damned yourselves! The only way back from perdition is penance. Penance and sacrifice.

//CODE REMOVED

//Login
client.login(process.env.TOKEN);
