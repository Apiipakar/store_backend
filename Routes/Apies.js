const express = require("express");
const db = require("../Models/Connections");
const router = express();

// get all products
router.get("/api/products", (req, res) => {
  let sql =
    "SELECT products.id, product_name, price, cover_Image, image_two, image_three,Description,catergories.id as category_id,catergory_name,product_Types.id as product_type_id,type_name  FROM products join catergories on products.category_id= catergories.id join product_types on products.ProductType = product_types.id order by products.id desc";
  db.query(sql, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(200).send(data);
    }
  });
});

// api to get category
router.get("/api/categories", (req, res) => {
  let sql = "select * from catergoriess";
  db.query(sql, (err, data) => {
    if (err) {
      res.status(500).send({ message: "no category table found" });
    } else {
      res.status(200).send(data);
    }
  });
});

// get specific user orders
router.get("/api/orders:id", (req, res) => {
  let id = req.params.id;
  let sql = "select * from orders where id  = '" + id + "'";
  db.query(sql, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

// create user
router.post("/api/users", (req, res) => {
  console.log(req.body);
  try {
    let sql = "INSERT INTO users SET?";
    db.query(sql, req.body, (err, data) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(200).send({ messag: "user created successfully" });
      }
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// add to cart
router.post("/api/cart", (req, res) => {
  // console.log(req.body);
  let producId = req.body.product_id;
  console.log(producId);
  let UserId = req.body.user_id;
  console.log(UserId);
  let sql = "INSERT INTO cart(product_id,user_id) VALUES (?, ?)";
  db.query(sql, [producId, UserId], (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send({ message: "Added to cart successfully" });
    }
  });
});

// get cart items for specific user
module.exports = router;
