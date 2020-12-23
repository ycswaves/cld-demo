const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cld = require("cld");

app.use(bodyParser.json()); // for parsing application/json

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await cld.detect(req.body.msg || "");
    res.json(result);
  } catch (e) {
    console.log(e);
    res.json({ err: e.toString() });
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
