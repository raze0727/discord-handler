const { Client, Collection } = require('discord.js');

const config = require('../config.json');

const client = new Client({ intents: config.client.intents });
client.commands = new Collection();
client.commandCooldowns = new Collection();
client.config = config;

module.exports = client;
