const { Client, Collection } = require('discord.js');
const client = new Client({ intents: ['Guilds', 'MessageContent'] });

client.commands = new Collection();
client.config = require('../config.json').client;

module.exports = client;
