const axios = require("axios");

async function getWhaleOrders(symbol = "BTCUSDT", minUsd = 1000000) {
  try {
    const { data } = await axios.get(
      `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=100`
    );

    const whales = [];

    // Compradores (Bids)
    data.bids.forEach((order) => {
      const price = Number(order[0]);
      const quantity = Number(order[1]);
      const value = price * quantity;

      if (value >= minUsd) {
        whales.push({
          side: "COMPRA",
          price,
          quantity,
          value,
        });
      }
    });

    // Vendedores (Asks)
    data.asks.forEach((order) => {
      const price = Number(order[0]);
      const quantity = Number(order[1]);
      const value = price * quantity;

      if (value >= minUsd) {
        whales.push({
          side: "VENDA",
          price,
          quantity,
          value,
        });
      }
    });

    return whales.sort((a, b) => b.value - a.value);

  } catch (error) {
    console.error("Erro:", error.message);
    return [];
  }
}

module.exports = {
  getWhaleOrders,
};