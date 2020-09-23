//===========ExpressJS Code===========
const express = require('express');
const app = express();
const port = 3000;

app.get('/',function(req,res) {
  res.send('<html><head><title>C4rn1ge is online</title><link rel="icon" type="image/ico" href="https://kckarnige.github.io/C4rn1ge_Bot/c41.ico"><style>body, html {height:100%;margin: 0;font-family:Arial,sans-serif;color:#ffffff;background:#0D101E} .center {margin: 0;position: absolute;top: 50%;left: 50%;margin-right: -50%;transform: translate(-50%, -45%)}</style></head> <body> <p class="center">Ceiling C4rn1ge is watching you sleep <a style="color:#5efdfd; text-decoration: none;" href="http://bit.ly/kckbotinv">:3</a></p> </body></html>');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//===========Bot Code===========
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "c.";
const meme = require('./meme.js');
const fetch = require('node-fetch');
const got = require('got');
client.config = require('./config.json');

client.on('ready', () => {
  console.log(`C4rn1ge is taking over the world! >:3`);
  client.user.setActivity("spicy memes | c.help", { type: "WATCHING", url: "https://www.youtube.com/channel/UCHDWD1G20SVO399jCS0LDNQ"})
});

client.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");
    let argsWithoutMentions = args.filter(arg => !Discord.MessageMentions.USERS_PATTERN.test(arg));
    switch(argsWithoutMentions[0]){

//===========Command Code===========

        case 'help':
        message.channel.send({
          content: "<:bluecommand_icon:756859547506966548> Here's all the commands! <:bluecommand_icon:756859547506966548>",
          embed: {
      title: "All Commands",
      description: "kckyt - Checkout KayoticCarnige's YouTube channel\nkckweb - Checkout KayoticCarnige's website\nnxupdate - Guide on updating your Nintendo Switch manually\nnxpatches - Guide to patching AMS CFW\nnxgraphics - Guide to making your games look better",
      color: 6225405,
      thumbnail: {
        url: "https://kckarnige.github.io/C4rn1ge_Bot/command_icon.png"
      }
    }});
        break;

        case 'nxupdate':
        message.channel.send({
          content: "<:blue_joycons:756868744394965023> Here you go! <:blue_joycons:756868744394965023>",
          embed: {
      title: "Manual Nintendo Switch Update Guide",
      description: "1. First make a NAND backup! In case things go wrong you can restore this.\n2. Download and put ChoidujourNX.nro on your SD card's SD:/switch folder from: https://switchtools.sshnuke.net/\n3. Download firmware you wish to install and put on SD from: https://darthsternie.net/index.php/switch-firmwares/\n4. Delete the 0100000000001000 (theme) and 0100000000000811 (custom font) folders in sd:/sxos/titles/ or sd:/atmosphere/contents/. Otherwise, your switch might not boot after a FW upgrade.\n5. Launch ChoidoujourNX from homebrew menu, browse to your firmware files, install the (eXFAT) version, follow on screen instructions.",
      color: 6225405,
      thumbnail: {
        url: "https://kckarnige.github.io/C4rn1ge_Bot/bluenx_logo.png"
      }
    }});
        break;

        case 'kckweb':
        message.channel.send({
          content: "https://kckarnige.github.io/"});
        break;

        case 'kckyt':
        message.channel.send({
          content: "https://www.youtube.com/channel/UCHDWD1G20SVO399jCS0LDNQ"});
        break;

        case 'nxpatches':
        message.channel.send({
          content: "<:blue_joycons:756868744394965023> Here you go! <:blue_joycons:756868744394965023>",
          embed: {
      title: "AMS Patching Guide",
      description: "1. Make sure you have Atmosphere installed on your Switch\n2. Go to [this link](https://github.com/eXhumer/patches/releases)\n3. Download the patch for your build of AMS\n4. Extract the files to the root of your SD\n5. Boot Atmosphere and have fun!",
      color: 6225405,
      thumbnail: {
        url: "https://kckarnige.github.io/C4rn1ge_Bot/bluenx_logo.png"
      }
    }});
        break;

        case 'nxgraphics':
        message.channel.send({
          content: "<:blue_joycons:756868744394965023> Here you go! <:blue_joycons:756868744394965023>",
          embed: {
      title: "NX Game Graphics Patch",
      description: '1. Make sure you have Atmosphere installed on your Switch\n2. Go to [this link](https://github.com/masagrator/NXGraphicsPatches)\n3. Download the repository\n4. Open the folder for the game you want to patch\n5. Rename the "titles" folder to "contents"\n6. Place the "contents" folder into your "atmosphere" folder on the root of your SD\n7. Boot Atmosphere and enjoy!',
      color: 6225405,
      thumbnail: {
        url: "https://kckarnige.github.io/C4rn1ge_Bot/bluenx_logo.png"
      }
    }});
    break;
    case 'meme':
        message.channel.send({
          content: "This command is not available...yet"});
}
});

client.login(process.env.token);