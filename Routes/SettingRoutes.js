const expres = require("express");
const db = require("../Models/Connections");
const { userAuthenication } = require("../Auth/Authentication");
const { Data } = require("../Controllers/Data");

// const getData = require("../Controllers/Data");
const router = expres.Router();

// get dashboard
router.get("/Settings", userAuthenication, (req, res) => {
  res.render("pages/Settings/Settings", {
    Title: "Settings",
  });
});
module.exports = router;
