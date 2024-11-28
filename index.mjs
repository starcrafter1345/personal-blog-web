import express from "express";

const app = express();

const PORT = 3000;

app.use("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
  res.end();
});

app.listen(PORT || 3000);
