const axios = require("axios");

async function getBitcoinPrice() {
  try {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price",
      {
        params: {
          ids: "bitcoin",
          vs_currencies: "usd,brl",
          include_24hr_change: true,
        },
      }
    );

    return {
      usd: data.bitcoin.usd,
      brl: data.bitcoin.brl,
      change24h: data.bitcoin.usd_24h_change,
    };
  } catch (error) {
    console.error("Erro ao consultar CoinGecko:", error.message);
    return null;
  }
}

module.exports = {
  getBitcoinPrice,
};