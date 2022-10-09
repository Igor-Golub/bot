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
    welcome: 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.jpg',
    guessed: 'https://tlgrm.ru/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/1.jpg'
  }
}