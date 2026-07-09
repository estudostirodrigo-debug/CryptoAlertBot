// Importa a função que consulta a CoinGecko
const { getBitcoinPrice } = require("../services/coinGecko");

/**
 * Registra o comando /btc
 */
function registerBTCCommand(bot) {
  bot.onText(/\/btc/, async (msg) => {
    const chatId = msg.chat.id;

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
₿ *Bitcoin*

💵 USD:
US$ ${bitcoin.usd.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}

🇧🇷 BRL:
R$ ${bitcoin.brl.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}

📈 Variação (24h):
${bitcoin.change24h.toFixed(2)}%

🌎 Fonte:
CoinGecko
`;

    // Envia para o usuário
    bot.sendMessage(chatId, mensagem, {
      parse_mode: "Markdown",
    });
  });
}

// Exporta o comando
module.exports = registerBTCCommand;