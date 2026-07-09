/**
 * ============================================
 * Comando /help
 * Lista todos os comandos disponíveis do bot.
 * ============================================
 */

function registerHelpCommand(bot) {
  bot.onText(/\/help/, (msg) => {
    bot.sendMessage(
      msg.chat.id,
      `📚 Lista de comandos

🚀 /start - Iniciar o bot
❓ /help - Mostrar esta ajuda
₿ /btc - Consultar o preço do Bitcoin
📊 /volume - Consultar o volume global do mercado

🔜 Em breve:
📈 /topvolume - Top criptomoedas por volume
`
    );
  });
}

// Exporta a função
module.exports = registerHelpCommand;