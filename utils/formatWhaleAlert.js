function formatWhaleAlert(order) {
  return `
🐋 *WHALE ALERT*

📈 Tipo: ${order.side}

💰 Preço:
US$ ${order.price.toLocaleString("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})}

🪙 Quantidade:
${order.quantity.toFixed(5)} BTC

💵 Valor:
US$ ${order.value.toLocaleString("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})}

━━━━━━━━━━━━━━━━━━

🤖 CryptoAlertBot v2.2
`;
}

module.exports = {
  formatWhaleAlert,
};