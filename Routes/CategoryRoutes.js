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

// add category
router.post("/addCategory", upload.single("image"), (req, res) => {
  let category_name = req.body.category_name;
  let icon = req.file.filename;
  console.log(icon);

  console.log(req.body);

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

//delet category
router.delete("/deleteCategory:id", (req, res) => {
  let id = req.params.id;
  let sql = "delet from catergory where id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
  });
});
module.exports = router;
