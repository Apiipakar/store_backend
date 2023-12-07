const expres = require("express");
const db = require("../Models/Connections");
const { userAuthenication } = require("../Auth/Authentication");
const { Data } = require("../Controllers/Data");

// const getData = require("../Controllers/Data");
const router = expres.Router();

// get dashboard
router.get(
  "/Products",
  userAuthenication,
  Data.productList,
  Data.prodTypeList,
  (req, res) => {
    res.render("pages/Products/Products", {
      Title: "Products",
    });
  }
);
module.exports = router;
