// Importa a biblioteca Axios para realizar requisições HTTP
const axios = require("axios");

/**
 * Busca o preço atual do Bitcoin na CoinGecko
 */
async function getBitcoinPrice() {
  try {
    // Faz uma requisição para a API da CoinGecko
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price",
      {
        params: {
          ids: "bitcoin",
          vs_currencies: "brl",
          include_24hr_change: true,
        },
      }
    );

    // Retorna apenas os dados que o bot precisa
    return {
      price: response.data.bitcoin.brl,
      change24h: response.data.bitcoin.brl_24h_change,
    };
  } catch (error) {
    console.error("Erro ao consultar a CoinGecko:", error.message);
    return null;
  }
}

// Exporta a função
module.exports = {
  getBitcoinPrice,
};