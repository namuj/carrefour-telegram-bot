
process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('./dialogflow'); 


const token ='1312865195:AAGpdRq84lTyDjfXq2ZZQYBKAjkNKI_rzmU';

const bot = new TelegramBot(token, {polling :true});

bot.on('message', async function (msg){

        const chatId = msg.chat.id;
        console.log(msg.text);
        const dfResponse = await dialogflow.sendMessage(chatId.toString(),msg.text);
        await bot.sendMessage(chatId,dfResponse.text);
        if(!(dfResponse.intent=='Bem-vindo') && !(dfResponse.intent=='bye') && !(dfResponse.intent=='Default Fallback Intent'))
            bot.sendMessage(chatId,'Posso ajudar em algo mais ?');        
});

