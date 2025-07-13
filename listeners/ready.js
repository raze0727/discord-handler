const { client } = require('../modules');

client.once('ready', () => {
  console.log('ready');
  client.application.commands.set(client.commands);
});
