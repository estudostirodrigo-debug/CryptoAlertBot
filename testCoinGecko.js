const { getBitcoinPrice } = require("./services/coinGecko");

(async () => {
  const price = await getBitcoinPrice();

  console.log(price);
})();