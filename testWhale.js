const { getWhaleOrders } = require("./services/whaleService");

(async () => {
  const whales = await getWhaleOrders("BTCUSDT", 10000);
  console.table(whales);
})();