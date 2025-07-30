const { Telegraf, Markup } = require("telegraf");
const axios = require("axios");
const token = "8351033429:AAG1Iw8cGj2y_YK3g5D707lQLa-oEEkfdXI";
const bot = new Telegraf(token);

bot.start((ctx) => {
    ctx.reply("Assalomu alekum");
});

bot.command("produc", async (ctx) => {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    data.forEach(element => {
        ctx.replyWithPhoto(`${element.image}`, {
            caption: `${element.title} - 
    $${element.price} `
        })
    });


});

bot.launch()