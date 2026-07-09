const axios = require("axios");

async function getGlobalMarketData() {
  try {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/global"
    );

    return {
      totalVolume: data.data.total_volume.usd,
      marketCap: data.data.total_market_cap.usd,
      btcDominance: data.data.market_cap_percentage.btc,
    };

  } catch (error) {
    console.error("Erro CoinGecko:", error.message);
    return null;
  }
}

module.exports = {
  getGlobalMarketData,
};