const expres = require("express");
const db = require("../Models/Connections");
const { userAuthenication } = require("../Auth/Authentication");
const { Data } = require("../Controllers/Data");

// const getData = require("../Controllers/Data");
const router = expres.Router();

// get dashboard
router.get("/Orders", userAuthenication, Data.orderList, (req, res) => {
  res.render("pages/Orders/Orders", {
    Title: "Orders",
  });
});
module.exports = router;
