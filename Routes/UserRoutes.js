const expres = require("express");
const db = require("../Models/Connections");
const { userAuthenication } = require("../Auth/Authentication");
const { Data } = require("../Controllers/Data");

// const getData = require("../Controllers/Data");
const router = expres.Router();

// get dashboard
router.get("/users", userAuthenication, Data.userList, (req, res) => {
  res.render("pages/Users/Users", {
    Title: "Users",
  });
});
module.exports = router;
