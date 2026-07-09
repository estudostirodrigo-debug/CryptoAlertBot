const { getWhaleOrders } = require("../services/whaleService");
const { formatWhaleAlert } = require("../utils/formatWhaleAlert");

function registerWhalesCommand(bot) {
  bot.onText(/^\/whales$/, async (msg) => {
    const chatId = msg.chat.id;

    try {
      const whales = await getWhaleOrders("BTCUSDT", 100000);

      if (whales.length === 0) {
        return bot.sendMessage(
          chatId,
          "🐋 Nenhuma grande ordem encontrada no momento."
        );
      }

      const message = formatWhaleAlert(whales[0]);

      bot.sendMessage(chatId, message, {
        parse_mode: "Markdown",
      });
    } catch (error) {
      console.error(error);
      bot.sendMessage(
        chatId,
        "❌ Erro ao consultar as grandes ordens."
      );
    }
  });
}

module.exports = registerWhalesCommand;