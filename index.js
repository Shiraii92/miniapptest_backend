const { Bot } = require('grammy');
const express = require('express');
const { webhookCallback } = require('grammy');
const axios = require('axios');

const bot = new Bot('7322904117:AAGkrmFmYFurFTgE6UcP0R1MJ-5YO5yUHs4'); // Replace with your actual bot token

bot.api.setMyCommands([
    { command: "start", description: "Start Bot" },
    { command: "lovetap", description: "Open LoveTap Mini App" },
]);

bot.command('start', async (ctx) => {
    ctx.reply('Welcome! I am a simple chat bot.');
    let user = ctx.message.from;
    console.log(user);
});

bot.command('lovetap', async (ctx) => {
    let user = ctx.message.from;
    console.log(user);
    const webLink = "https://test-three-amber-91.vercel.app/";
    ctx.reply("Hi! let's get you started. Click the button below", {
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

const app = express();
app.use(express.json());
app.use(webhookCallback(bot, 'express'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  const botToken = '7322904117:AAGkrmFmYFurFTgE6UcP0R1MJ-5YO5yUHs4';
  const webhookUrl = `https://miniapptest-backend-git-master-shiraii92s-projects.vercel.app/webhook`; // Update this with your actual Vercel URL

  try {
    const response = await axios.post(`https://api.telegram.org/bot${botToken}/setWebhook`, {
      url: webhookUrl,
    });
    console.log('Webhook set successfully:', response.data);
  } catch (error) {
    console.error('Error setting webhook:', error);
  }
});
