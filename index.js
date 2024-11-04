const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("NIHIT JAIN ON TWITTER");
});
app.get("/login", (req, res) => {
  res.send("<h1>LOGIN JAIN SIR</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("CHAI AUR CODE WITH NIHIT");
});

app.listen(process.env.PORT, () => {
  console.log("Example app listening on port", process.env.PORT);
});
