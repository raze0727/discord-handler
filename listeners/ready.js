const { client } = require('../modules');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.application.commands.set(client.commands);
});
