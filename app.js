const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const {
  readAllTableware,
  createTableware,
  readTableware,
  updateTableware,
  deleteTableware,
  readAllOffice,
  readOffice,
  createOffice,
  updateOffice,
  deleteOffice,
} = require("./database");

app.use(cors());
app.use(express.json());

app.get("/office/:office_id/tableware", async (req, res) => {
  const office_id = req.params.office_id;
  res.json(await readAllTableware(office_id));
});

app.get("/office", async (req, res) => {
  res.json(await readAllOffice());
});

app.get("/office/:office_id/tableware/:id", async (req, res) => {
  const office_id = req.params.office_id;
  const id = req.params.id;
  res.json(await readTableware(office_id, id));
});

app.get("/office/:id", async (req, res) => {
  const id = req.params.id;
  res.json(await readOffice(id));
});

app.post("/office/:office_id/tableware", async (req, res) => {
  const office_id = req.params.office_id;
  res.json(await createTableware(office_id, req.body));
});

app.post("/office", async (req, res) => {
  res.json(await createOffice(req.body));
});

app.put("/office/:id", async (req, res) => {
  const id = req.params.id;
  res.json(await updateOffice(id, req.body));
});

app.put("/office/:office_id/tableware/:id", async (req, res) => {
  const office_id = req.params.office_id;
  const id = req.params.id;
  res.json(await updateTableware(office_id, id, req.body));
});

app.delete("/office/:id", async (req, res) => {
  const id = req.params.id;
  res.json(await deleteOffice(id));
});

app.delete("/office/:office_id/tableware/:id", async (req, res) => {
  const office_id = req.params.office_id;
  const id = req.params.id;
  res.json(await deleteTableware(office_id, id));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
