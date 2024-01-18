const { Telegraf } = require('telegraf');
const { Client } = require('@notionhq/client');
require('dotenv').config();

const token = process.env.BOT_TOKEN;
const apiKey = process.env.NOTION_TOKEN;

const notion = new Client({ auth: apiKey });

console.log(process.env.NOTION_TOKEN);

const bot = new Telegraf(token);

async function getDataBases() {
    try {
        const response = await notion.databases.query({
            database_id: 'be6b6e525aac4244891369f9cf891672'
        });
        console.log('Список баз данных: ', response.results);
    } catch(err) {
        console.log(err);
    }
}

bot.start((ctx) => {
    ctx.reply('Ответ бота');
});

bot.on('text', (ctx) => {
    ctx.reply('Согласен');
});

bot.launch().then(() => {
    console.log('Бот запущен');
});

getDataBases();

