const { config } = require("dotenv");

config();

PORT = process.env.PORT || 3000;
HOST = process.env.HOST || "localhost";

module.exports = {
  PORT,
  HOST,
};
