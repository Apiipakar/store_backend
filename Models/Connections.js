const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "somictstoreapp",
  password: "",
});

db.connect((err) => {
  if (err) throw err;
  console.log("database connected");
});

module.exports = db;
