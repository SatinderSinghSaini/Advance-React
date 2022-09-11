import serverRender from "./renderers/ServerRender";
import { data } from "./testData.json";

const express = require("express");
const config = require("./config");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const initialContent = await serverRender();
  res.render("index", { ...initialContent });
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
