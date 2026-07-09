/**
 * ============================================
 * Comando /volume
 * Exibe os dados globais do mercado de criptomoedas.
 * ============================================
 */

const { getGlobalMarketData } = require("../services/volumeService");

function registerVolumeCommand(bot) {
  bot.onText(/\/volume/, async (msg) => {
    const chatId = msg.chat.id;

    // Mensagem enquanto consulta a API
    await bot.sendMessage(chatId, "📊 Consultando dados do mercado...");

    const market = await getGlobalMarketData();

    if (!market) {
      return bot.sendMessage(
        chatId,
        "❌ Não foi possível consultar os dados do mercado."
      );
    }

    const volume = market.totalVolume.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const marketCap = market.marketCap.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const dominance = market.btcDominance.toFixed(2).replace(".", ",");

    bot.sendMessage(
      chatId,
      `📊 Mercado Global de Criptomoedas

💰 Volume (24h)
US$ ${volume}

📈 Market Cap
US$ ${marketCap}

🪙 Dominância do BTC
${dominance}%

🌐 Fonte: CoinGecko`
    );
  });
}

module.exports = registerVolumeCommand;
