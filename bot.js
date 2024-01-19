import { Telegraf, Markup } from 'telegraf';
import { getPage } from './controllers/pagesController.js';
import { searchContent } from './controllers/pagesController.js';
import { getBlocks } from './controllers/pagesController.js';
import { getDataBases } from './controllers/getDataBasesController.js';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.BOT_TOKEN;
const apiKey = process.env.NOTION_TOKEN;

const bot = new Telegraf(token);

bot.start((ctx) => {
    const keyboard = Markup.keyboard([
        ['Добавить задачу', 'Удалить задачу'],
        ['Посмотреть задачи на сегодня']
    ]).resize();

    ctx.reply('Выберите опцию: ' , keyboard);
});

bot.on('text', (ctx) => {
    ctx.reply('Согласен');
});

bot.help((ctx) => ctx.reply('send me a sticker'));

bot.launch().then(() => {
    console.log('Бот запущен');
});


// test
const pageId = searchContent('Javascript');
getPage();
getBlocks();


