const { readdirSync } = require('fs');

const client = require('./client');

async function main() {
  await client.login(client.config.client.token);

  readdirSync('./commands').forEach((category) => {
    readdirSync(`./commands/${category}`).forEach((command) => {
      if (!command.endsWith('.js')) return;
      const file = require(`../commands/${category}/${command}`);
      if (file?.name && file?.description && file?.type && file?.run)
        client.commands.set(file?.name, file);
    });
  });

  readdirSync('./listeners').forEach((listener) => {
    if (!listener.endsWith('.js')) return;
    require(`../listeners/${listener}`);
  });
}

main();
