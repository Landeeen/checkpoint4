const { Pool } = require("pg");
const pool = new Pool();

async function readAllTableware(office_id) {
  try {
    const res = await pool.query(
      "SELECT tableware.name, tableware.qty, office.location FROM tableware INNER JOIN office ON office.id = tableware.office_id WHERE office_id = $1",
      [office_id]
    );
    console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.log(err);
  }
}

async function readTableware(office_id, id) {
  try {
    const res = await pool.query(
      "SELECT id, name, qty FROM tableware WHERE office_id = $1 AND id = $2;",
      [office_id, id]
    );
    return res.rows[0];
  } catch (err) {
    console.log(err);
  }
}

async function createTableware(office_id, tableware) {
  try {
    const res = await pool.query(
      "INSERT INTO tableware (name, qty, office_id) VALUES ($1, $2, $3)",
      [tableware.name, tableware.qty, office_id]
    );
    return;
  } catch (err) {
    console.log(err);
  }
}

async function updateTableware(office_id, id, tableware) {
  try {
    const res = await pool.query(
      "UPDATE tableware SET name = $3, qty = $4, office_id = $5 WHERE office_id = $1 AND id = $2",
      [office_id, id, tableware.name, tableware.qty, tableware.office_id]
    );
    return;
  } catch (err) {
    console.log(err);
  }
}

async function deleteTableware(office_id, id) {
  try {
    const res = await pool.query(
      "DELETE FROM tableware WHERE office_id = $1 AND id = $2",
      [office_id, id]
    );
    return;
  } catch (err) {
    console.log(err);
  }
}

async function readAllOffice() {
  try {
    const res = await pool.query(
      "SELECT name, location, starting_year FROM office"
    );
    console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.log(err);
  }
}

async function readOffice(id) {
  try {
    const res = await pool.query(
      "SELECT id, name, location, starting_year FROM office WHERE id = $1;",
      [id]
    );
    return res.rows[0];
  } catch (err) {
    console.log(err);
  }
}

async function createOffice(office) {
  try {
    const res = await pool.query(
      "INSERT INTO office (name, location, starting_year) VALUES ($1, $2, $3)",
      [office.name, office.location, office.starting_year]
    );
    return;
  } catch (err) {
    console.log(err);
  }
}

async function updateOffice(id, office) {
  try {
    const res = await pool.query(
      "UPDATE office SET name = $2, location = $3, starting_year = $4 WHERE id = $1",
      [id, office.name, office.location, office.starting_year]
    );
    return;
  } catch (err) {
    console.log(err);
  }
}

async function deleteOffice(id) {
  try {
    const res = await pool.query("DELETE FROM office WHERE id = $1", [id]);
    return;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
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
};
