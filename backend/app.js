const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const schedule = require("node-schedule");

const dotenv = require("dotenv");
const uploadArticlesApi = require("./data");

dotenv.config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

uploadArticlesApi();

const rule = new schedule.RecurrenceRule();
rule.minute = 25;

const job = schedule.scheduleJob(rule, function () {
  console.log("\x1b[43m", "Отримуємо новини раз на годину", "\x1b[0m");
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
