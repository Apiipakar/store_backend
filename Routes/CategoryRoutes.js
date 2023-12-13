const expres = require("express");
const db = require("../Models/Connections");
const { userAuthenication } = require("../Auth/Authentication");
const { Data } = require("../Controllers/Data");
const upload = require("../Models/myMulter");

// const getData = require("../Controllers/Data");
const router = expres.Router();

// get dashboard
router.get("/Categories", userAuthenication, Data.categoryList, (req, res) => {
  res.render("pages/Categories/Categories", {
    Title: "Categories",
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

// add category
router.post("/addCategory", upload.single("image"), (req, res) => {
  let category_name = req.body.category_name;
  let icon = req.file.filename;

  let sql = "INSERT INTO catergories (catergory_name,icon) VALUES(?,?)";
  db.query(sql, [category_name, icon], (err, result) => {
    if (err) throw err;
    if (result) {
      res.status(200).send({ message: "Category Saved successfully" });
    } else {
      res.status(400).send({ error: "Category not Saved" });
    }
  });
});
// delete all data
router.get("/api/deleteAllCategory", (req, res) => {
  let sql = "TRUNCATE TABLE catergories";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).send({ message: "All Categories Deleted" });
  });
});
//delete category
router.delete("/deleteCategory:id", (req, res) => {
  let id = req.params.id;

  let sql = "delete from catergories where id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.status(200).send({ message: "Category Deleted Successfull" });
  });
});

// update category
router.put("/updateCategory:id", upload.single("image"), (req, res) => {
  let id = req.params.id;
  let category_name = req.body.category_name;
  let icon = req.file.filename;
  // console.log(id, category_name, icon);
  let sql =
    "UPDATE catergories SET catergory_name = ?, icon = ? WHERE id = " + id + "";
  db.query(sql, [category_name, icon], (err, result) => {
    if (err) throw err;
    res.status(200).send({ message: "Category Updated Successfully" });
  });
});
module.exports = router;
