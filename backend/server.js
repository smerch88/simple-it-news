const { PORT = 4000 } = process.env;

const app = require("./app");
const sequelize = require("./db");

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); //{ force: true } { alter: true }

    app.listen(PORT, () => {
      console.log(
        "\x1b[46m",
        `==>Server running. Use our API on port: ${PORT}<==`,
        "\x1b[0m"
      );
      console.log("Database connection successful");
    });
  } catch (e) {
    console.error(e);
  }
};

start();
