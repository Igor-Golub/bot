const TelegramApi = require('node-telegram-bot-api')
const { gameOptions, againOptions } = require('./options')
const { TELEGRAM_TOKEN, commands, events, stickers, messages } = require('./constants')

const bot = new TelegramApi(TELEGRAM_TOKEN, {polling: true})

const chats = {}

const startGame = async (chatId) => {
  await bot.sendMessage(chatId, messages.initialGame)
  const randomNumber = Math.floor(Math.random() * 10)
  chats[chatId] = randomNumber

  await bot.sendMessage(chatId, messages.guess, gameOptions)
}

const start = async () => {
  await bot.setMyCommands([
    {command: commands.start, description: 'Начатьное приветствие'},
    {command: commands.game, description: 'Игра - отгадай число'}
  ])

  bot.on(events.message, async (message) => {
    const {text} = message
    const {id: chatId, first_name, last_name} = message.chat

    if (text === commands.start) {
      await bot.sendSticker(chatId, stickers.welcome)
      return bot.sendMessage(chatId, messages.welcome({ firstName: first_name, lastName: last_name }))
    }

    if (text === commands.game) {
      return startGame(chatId)
    }

    return bot.sendMessage(chatId, messages.notUnderstand)
  })

  bot.on(events.cbQuery, async (message) => {
    const {data} = message
    const {id: chatId} = message.message.chat

    if(data === commands.again) {
      return startGame(chatId)
    }

    if (Number(data) === chats[chatId]) {
      await bot.sendSticker(chatId, stickers.guessed)
      return bot.sendMessage(chatId, messages.guessed, againOptions)
    }

    return bot.sendMessage(chatId, messages.notGuessed({ hiddenNumber: chats[chatId]}), againOptions)
  })
}

start()