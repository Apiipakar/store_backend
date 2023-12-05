const expres = require("express");
const db = require("../Models/Connections");
const router = expres.Router();

// home page
router.get("/", (req, res) => {
  res.render("Pages/Login", { Title: "Login Page" });
});

// login api
router.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  // console.log(body);
  let sql = "SELECT * FROM admin WHERE email = ? and password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      req.session.user = result[0].id;

      res.status(200).send({ message: "successfull logged in" });
    } else {
      res.status(400).send({ message: "Invalid username or password" });
    }
  });
});

// logout api
router.get("/logout", (req, res) => {
  req.session.destroy();
  setTimeout(() => {
    res.redirect("/");
  }, 1000);
});

module.exports = router;
