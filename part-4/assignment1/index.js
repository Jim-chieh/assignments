const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello,My Server!</h1>");
});

app.listen(3000, () => {
  console.log("The application is running!");
});

setTimeout(() => {
  exit(0);
}, 30000);
