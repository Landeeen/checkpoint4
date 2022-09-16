const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const { readAllTableware, createTableware } = require("./database");

app.use(cors());
app.use(express.json());

app.get("/tableware", async (req, res) => {
  res.json(await readAllTableware());
});

app.post("/tableware", async (req, res) => {
  res.json(await createTableware(req.body));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
