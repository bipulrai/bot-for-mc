const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'your-server.aternos.host', // 🟢 Put your Aternos Dyn IP here
  port: 12345,                      // 🟢 Put your 5-digit Aternos Port here
  username: 'TLauncherBot',         // The bot's name
  version: false                    // Keeps it compatible with your server version
})

bot.on('spawn', () => {
  console.log('Bot successfully joined your Aternos Server!')
})

bot.on('end', () => {
  console.log('Disconnected. Reconnecting...')
})
