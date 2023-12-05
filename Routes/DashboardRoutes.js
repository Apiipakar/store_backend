const expres = require("express");
const db = require("../Models/Connections");
const { userAuthenication } = require("../Auth/Authentication");
const { Data } = require("../Controllers/Data");

// const getData = require("../Controllers/Data");
const router = expres.Router();

// get dashboard
router.get(
  "/Dashboard",
  userAuthenication,
  Data.ordarsCount,
  Data.userCount,
  Data.productsCount,
  Data.categoryCount,
  (req, res) => {
    res.render("pages/Dashboard/Dashboard", {
      Title: "Dashboard",
    });
    // console.log(res.locals.ordersCount);
  }
);
module.exports = router;
