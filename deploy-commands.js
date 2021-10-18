const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

require('dotenv').config();


const commands = [
    new SlashCommandBuilder().setName('dan').setDescription('Dan example command!'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.BOTTOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENTID, process.env.SERVERID), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);