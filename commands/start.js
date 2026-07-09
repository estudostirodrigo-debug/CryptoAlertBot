function registerStartCommand(bot) {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
      msg.chat.id,
      `🚀 Bem-vindo ao CryptoAlertBrasilBot!

Seu assistente para monitoramento do mercado de criptomoedas.

Comandos disponíveis:
/start
/help
/btc`
    );
  });
}

module.exports = registerStartCommand;