# Discord Handler

A simple discord command handler

## Table of Contents

- [Getting Started](#getting-started)
- [Configurations](#configurations)
- [Example Command File](#example-command-file)
- [Roadmap](#roadmap)

## Getting Started

1. Cloning the repository

```sh
   git clone https://github.com/raze0727/discord-handler.git
```

2. Navigate into the folder

```sh
   cd discord-handler
```

3. Installing dependencies

```sh
   npm install
```

## Configurations

### config.json Example

```json
{
  "client": {
    "token": "", //Bot Token
    "intents": ["Guilds", "MessageContent"] //Bot intents
  },
  "owners": ["1255741620913963019", "ownerID2", ...]
}
```

## Example command file

```js
const {
  CommandInteraction,
  Client,
  ApplicationCommandType,
  PermissionsBitField,
} = require('discord.js');

module.exports = {
  name: 'example',
  description: 'Example command.',
  cooldown: 0,
  permissions: [PermissionsBitField.Flags.SendMessages],
  type: ApplicationCommandType.ChatInput,
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  run: async (client, interaction) => {
    interaction.reply({
      content: 'This is a example command.',
    });
  },
};
```

## Roadmap

- [x] Main Handler
- [x] Command Cooldown
- [x] Owner-Only Commands
- [x] Command Permissions
- [ ] Role Permissions
- [ ] Loggings
- [ ] Database
