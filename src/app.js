const app = require("./index");
const { PORT } = require("./config");
const main = async (req, res) => {
  try {
    app.listen(PORT, () => {
      console.log(`Escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

main();
