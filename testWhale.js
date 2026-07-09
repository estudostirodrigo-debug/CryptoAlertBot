const { getWhaleOrders } = require("./services/whaleService");
const { formatWhaleAlert } = require("./utils/formatWhaleAlert");

(async () => {
  const whales = await getWhaleOrders("BTCUSDT", 100000);

  if (!whales.length) {
    console.log("Nenhuma baleia encontrada.");
    return;
  }

  console.log(formatWhaleAlert(whales[0]));
})();