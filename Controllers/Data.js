const db = require("../Models/Connections");

// ------------------------------LIST-----------------------------------------------
// get List of Users
const userList = (req, res, next) => {
  let userListSql = "SELECT * FROM users";
  db.query(userListSql, (err, result) => {
    if (err) throw err;
    res.locals.userList = result;
    next();
  });
};
// get List of products
const productList = (req, res, next) => {
  let productSql = "SELECT * FROM products";
  db.query(productSql, (err, result) => {
    if (err) throw err;
    res.locals.productList = result;
    next();
  });
};

// get List of orders
const orderList = (req, res, next) => {
  let orderSql = "SELECT * FROM orders";
  db.query(orderSql, (err, result) => {
    if (err) throw err;
    res.locals.orderList = result;
    next();
  });
};

// get List of categories
const categoryList = (req, res, next) => {
  let categorySql = "SELECT * FROM catergories";
  db.query(categorySql, (err, result) => {
    if (err) throw err;
    res.locals.categoryList = result;
    next();
  });
};

// get List of comments
const commentList = (req, res, next) => {
  let commentSql = "SELECT * FROM comments";
  db.query(commentSql, (err, result) => {
    if (err) throw err;
    res.locals.commentList = result;
    next();
  });
};

// get List of product type
const prodTypeList = (req, res, next) => {
  let prodTypeSql = "SELECT * FROM product_types";
  db.query(prodTypeSql, (err, result) => {
    if (err) throw err;
    res.locals.proTypeList = result;
    next();
  });
};

// ------------------------COUNTS------------------------------------------
//ordars count
const ordarsCount = (req, res, next) => {
  // get ordersCount
  let ordersCountsSql = "SELECT COUNT( * ) AS count FROM orders";
  db.query(ordersCountsSql, (err, result) => {
    if (err) throw err;
    res.locals.ordersCount = result[0];
    // console.log(res.locals.ordersCount);
    next();
  });
};

//products count
const productsCount = (req, res, next) => {
  let productSql = "SELECT COUNT( * ) AS count FROM products";
  db.query(productSql, (err, result) => {
    if (err) throw err;
    res.locals.prodCount = result[0];

    next();
  });
};

//category count
const categoryCount = (req, res, next) => {
  let categorySql = "SELECT COUNT( * ) AS count FROM catergories";
  db.query(categorySql, (err, result) => {
    if (err) throw err;
    res.locals.categoryCount = result[0];

    next();
  });
};

//users count
const userCount = (req, res, next) => {
  let UserSql = "SELECT COUNT( * ) AS count FROM users";
  db.query(UserSql, (err, result) => {
    if (err) throw err;
    res.locals.UsersCount = result[0];
    next();
  });
};

module.exports.Data = {
  userList,
  orderList,
  productList,
  categoryList,
  commentList,
  prodTypeList,

  // count
  userCount,
  productsCount,
  ordarsCount,
  categoryCount,
};
