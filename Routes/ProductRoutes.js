const expres = require("express");
const db = require("../Models/Connections");
const { userAuthenication } = require("../Auth/Authentication");
const { Data } = require("../Controllers/Data");
const upload = require("../Models/myMulter");

// const getData = require("../Controllers/Data");
const router = expres.Router();

// get dashboard
router.get(
  "/Products",
  userAuthenication,
  Data.productList,
  Data.categoryList,
  Data.prodTypeList,
  (req, res) => {
    res.render("pages/Products/Products", {
      Title: "Products",
    });
  }
);

// get all products
router.get("/api/products", (req, res) => {
  let sql = "SELECT * FROM products";
  db.query(sql, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});
// create new Products
router.post(
  "/addProduct",
  upload.fields([
    { name: "CoverImage", maxCount: 1 },
    { name: "imageTwo", maxCount: 1 },
    { name: "imageThree", maxCount: 1 },
  ]),
  (req, res) => {
    let product_name = req.body.product_name;
    let price = parseInt(req.body.price);
    let category_id = parseInt(req.body.category_id);
    let ProdType_id = parseInt(req.body.ProdType_id);
    let description = req.body.description;
    let coverImage = req.files.CoverImage[0].filename;
    let imageTwo = req.files.imageTwo[0].filename;

    // console.log(coverImage);

    //if third image found save it
    if (req.files.imageThree != undefined) {
      let imageThree = req.files.imageThree[0].filename;
      let sql =
        "INSERT INTO products(Product_name,Description,category_id,price,cover_image,image_two,image_three,ProductType) VALUES(?,?,?,?,?,?,?,?)";

      db.query(
        sql,
        [
          product_name,
          description,
          category_id,
          price,
          coverImage,
          imageTwo,
          imageThree,
          ProdType_id,
        ],
        (err, result) => {
          if (err) throw err;
          res.status(200).send({ message: "Product Created Successfully" });
        }
      );
    } else {
      let sql =
        "INSERT INTO products(Product_name,Description,category_id,price,cover_image,image_two,ProductType) VALUES(?,?,?,?,?,?,?)";

      db.query(
        sql,
        [
          product_name,
          description,
          category_id,
          price,
          coverImage,
          imageTwo,
          ProdType_id,
        ],
        (err, result) => {
          if (err) throw err;
          res.status(200).send({ message: "Product Created Successfully" });
        }
      );
    }
  }
);

// delete product
router.delete("/deleteProduct:id", (req, res) => {
  let id = req.params.id;

  let sql = "delete from products where id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.status(200).send({ message: "Product Deleted Successfull" });
  });
});

router.put(
  "/updateProduct:id",
  upload.fields([
    { name: "CoverImage", maxCount: 1 },
    { name: "imageTwo", maxCount: 1 },
    { name: "imageThree", maxCount: 1 },
  ]),
  (req, res) => {
    let id = req.params.id;
    console.log(id);
    console.log(req.files);

    let product_name = req.body.product_name;
    let price = parseInt(req.body.price);
    let category_id = parseInt(req.body.category_id);
    let ProdType_id = parseInt(req.body.ProdType_id);
    let description = req.body.description;
    let coverImage = req.files.CoverImage[0].filename;
    let imageTwo = req.files.imageTwo[0].filename;

    //if third image found update it

    let sql =
      "UPDATE products SET Product_name = ? ,Description = ? ,category_id = ?,price = ? ,cover_image = ? ,image_two = ? ,ProductType = ?  WHERE id = " +
      id +
      "";

    db.query(
      sql,
      [
        product_name,
        description,
        category_id,
        price,
        coverImage,
        imageTwo,
        ProdType_id,
      ],
      (err, result) => {
        if (err) throw err;
        res.status(200).send({ message: "Product Updated Successfully" });
      }
    );
  }
);

module.exports = router;
