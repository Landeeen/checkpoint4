const { Pool } = require("pg");
const pool = new Pool();

async function readAllTableware() {
  try {
    const res = await pool.query("SELECT name, qty FROM Tableware");
    console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.log(err);
  }
}

async function createTableware(name, qty) {
  try {
    const res = await pool.query(
      "INSERT INTO Tableware (name, qty) VALUES ($1, $2)",
      [name, qty]
    );
    return;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  readAllTableware,
  createTableware,
};
