const db = require("../Models/Connections");

module.exports.userAuthenication = (req,res,next)=>{
    let loggedUserId = req.session.user;
    let sql = "SELECT * FROM admin where id = ?";
    db.query(sql, [loggedUserId], (err, user) => {
      if (err) throw err;
      if (user.length > 0) {
        res.locals.User = user[0]
        next();
      } else {
        res.redirect("/");
      }
    });
}