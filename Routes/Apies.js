const express = require("express");
const router = express();

// get all products
router.get("/api/products", (req, res) => {
  let sql = "SELECT * FROM products";
  db.query(sql, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

// api to get category
router.get("/api/categories", (req, res) => {
  let sql = "select * from catergories";
  db.query(sql, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

router.post("/api/users", (req, res) => {});
module.exports = router;
