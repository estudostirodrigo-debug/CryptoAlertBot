// Importa a função que consulta a CoinGecko
const { getBitcoinPrice } = require("../services/coingecko");

/**
 * Registra o comando /btc
 */
function registerBTCCommand(bot) {
  bot.onText(/\/btc/, async (msg) => {
    const chatId = msg.chat.id;

    // Mensagem enquanto consulta a API
    bot.sendMessage(chatId, "⏳ Consultando o preço do Bitcoin...");

    // Busca os dados
    const bitcoin = await getBitcoinPrice();

    // Verifica se houve erro
    if (!bitcoin) {
      return bot.sendMessage(
        chatId,
        "❌ Não foi possível consultar o preço do Bitcoin."
      );
    }

    // Formata a mensagem
    const mensagem = `
₿ Bitcoin

💵 Preço:
R$ ${bitcoin.price.toLocaleString("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})}

📈 Variação (24h):
${bitcoin.change24h.toFixed(2)}%

🌎 Fonte:
CoinGecko
`;

    // Envia para o usuário
    bot.sendMessage(chatId, mensagem);
  });
}

// Exporta o comando
module.exports = registerBTCCommand;