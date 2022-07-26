const express = require("express");
const app = express();

//https://expressjs.com/en/starter/static-files.html
app.use("/sum.html", express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Hello,My Server!<h1>");
});

app.get("/getData", (req, res) => {
  const { number } = req.query;
  console.log(number);
  if (number == null) {
    res.send("Lack of Parameter");
  } else if (isNaN(number)) {
    res.send("Wrong Parameter");
  } else {
    const transferNum = parseInt(number);
    let total = 0;
    const counter = (num) => {
      for (let i = num; i >= 1; i--) {
        total += i;
      }
      return total;
    };
    counter(transferNum);
    res.send(`${total}`);
  }
});

app.listen(3000, () => {
  console.log("The application is running!");
});
