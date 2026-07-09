// ======================================
// CryptoAlertBrasilBot
// Arquivo principal (index.js)
// ======================================

// Carrega as variáveis do arquivo .env
require("dotenv").config();

// Importa a biblioteca do Telegram
const { default: TelegramBot } = require("node-telegram-bot-api");

// Importa os comandos
const registerStartCommand = require("./commands/start");
const registerHelpCommand = require("./commands/help");
const registerBTCCommand = require("./commands/btc");
const registerVolumeCommand = require("./commands/volume");

// Obtém o token do .env
const token = process.env.BOT_TOKEN;

// Verifica se o token existe
if (!token) {
  console.error("❌ BOT_TOKEN não encontrado no arquivo .env");
  process.exit(1);
}

// Cria o bot
const bot = new TelegramBot(token, {
  polling: {
    autoStart: true,
  },
});

// Remove Webhook (caso exista)
bot
  .deleteWebhook()
  .then(() => {
    console.log("✅ Webhook removido.");
  })
  .catch((error) => {
    console.error("Erro ao remover webhook:", error.message);
  });

// ============================
// Registro dos comandos
// ============================

registerStartCommand(bot);
registerHelpCommand(bot);
registerBTCCommand(bot);
registerVolumeCommand(bot);
// ============================

console.log("🚀 CryptoAlertBrasilBot iniciado com sucesso!");