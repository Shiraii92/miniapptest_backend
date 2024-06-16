const { Bot } = require('grammy');

const bot = new Bot('7322904117:AAGkrmFmYFurFTgE6UcP0R1MJ-5YO5yUHs4'); // Replace with your actual bot token

bot.api.setMyCommands([
    { command: "start", description: "Start Bot" },
    { command: "lovetap", description: "Open LoveTap Mini App" },
    ]);
// Handle the /start command
bot.command('start', async (ctx) => {
    ctx.reply('Welcome! I am a simple chat bot.');
    let user = ctx.message.from;
    console.log(user);
});

bot.command('lovetap', async (ctx) => {
    let user = ctx.message.from;
    console.log(user);
    // const webLink = "https://lovetapbot.vercel.app";
    const webLink = "https://test-three-amber-91.vercel.app/";
    ctx.reply("Hi! lets get you started Click the button below", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Get Started",
              web_app: {
                url: webLink,
              },
            },
          ],
        ],
      },
    });
});

// Start the bot (using long polling)
bot.start();