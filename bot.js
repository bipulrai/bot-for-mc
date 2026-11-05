const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'ramraj888.aternos.me', // 🟢 Replace with your Dyn IP
  port: 17020,                      // 🟢 Replace with your 5-digit Port
  username: 'RenderBot247',
  version: false
})

bot.on('spawn', () => {
  console.log('Bot is online on Aternos!')
  
  // Anti-AFK: Makes the bot jump every 15 seconds so Aternos thinks it's a real player
  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 500)
  }, 15000)
})

bot.on('end', () => {
  console.log('Disconnected. Exiting process so Render restarts it...')
  process.exit(1) 
})
