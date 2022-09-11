import serverRender from "./ServerRender";

const express = require("express");
const config = require("./config");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const initialContent = serverRender();
  res.render("index", { initialContent: initialContent });
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
