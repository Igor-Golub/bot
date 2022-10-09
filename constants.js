module.exports = {
  TELEGRAM_TOKEN: '5619183169:AAF4pTJ90YWr9fdIfHl_f6L-uVmr_h5tIAw',
  commands: {
    again: '/again',
    start: '/start',
    game: '/game',
  },

  events: {
    message: 'message',
    cbQuery: 'callback_query'
  },

  messages: {
    initialGame: 'Сейчас я загадаю цифру от 0 до 9, а ты должен ее отгадать',
    welcome: ({ firstName, lastName }) => `Hi, ${firstName} ${lastName}`,
    guess: 'Отгадывай',
    guessed: 'Отгадано',
    notGuessed: ({ hiddenNumber }) => `К сожадению ты не отгадал, я загадал - ${hiddenNumber}`,
    notUnderstand: 'Я тебя не понимаю, попробуй еще раз!'

  },

  stickers: {
    welcome: 'https://cdn.tlgrm.app/stickers/8e8/b67/8e8b67f5-c211-4163-813e-5e210c2b0f46/192/3.webp',
    guessed: 'https://tlgrm.ru/_/stickers/8e8/b67/8e8b67f5-c211-4163-813e-5e210c2b0f46/192/16.webp'
  }
}