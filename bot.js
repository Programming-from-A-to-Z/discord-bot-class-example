// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)

function botReady() {
    console.log("Bot is ready! 🤖")
}

client.once('ready', botReady);

client.on('interactionCreate', async (interaction) => {
    if (interaction.commandName === 'dan') {
        await interaction.reply('Hi Dan!');
    }
});

// Login to Discord with your client's token
client.login(process.env.BOTTOKEN);