const { Telegraf } = require('telegraf');
 
const bot = new Telegraf('8013276251:AAGTnEFXAquVkYwCQH9G09qzRcl5Jql0auw');


bot.start((ctx) => ctx.reply('welcome to the new coding bot from Subhankar '));

// bot.command('binarysearchjs', (ctx) => ctx.reply(binarysearch)); 

bot.on('sticker',(ctx) => ctx.reply('❤️'))

bot.launch(); 