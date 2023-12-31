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
  // let productSql = "select * from products";
  let productSql =
    "SELECT products.id,Product_name,price,type_name,image_two,cover_Image,catergory_name,type_name,Description FROM products  join catergories on products.category_id = catergories.id join product_types on products.ProductType = product_types.id";
  db.query(productSql, (err, result) => {
    if (err) throw err;
    res.locals.productList = result;
    // console.log(res.locals.productList);
    next();
  });
};

// get List of orders
const orderList = (req, res, next) => {
  let orderSql =
    "SELECT orders.id,users.id as userId,full_name,username,email,phone_number,userProfile,products.id as productId,Product_name,catergory_name,price,cover_Image,time,order_status.Order_status_name as status FROM orders join users on orders.user_id = users.id join products on orders.Product_id = products.id join catergories on products.category_id = catergories.id join order_status on orders.order_status = order_status.id";
  db.query(orderSql, (err, result) => {
    if (err) throw err;
    res.locals.orderList = result;
    console.log(res.locals.orderList);
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

// get List of product type
const orderStaus = (req, res, next) => {
  let prodTypeSql = "SELECT * FROM order_status";
  db.query(prodTypeSql, (err, result) => {
    if (err) throw err;
    res.locals.AllOrderStatus = result;
    next();
  });
};

const LastFiveOrders = (req, res, next) => {
  let lastOrdersSql =
    "select orders.id as id , product_name,full_name,order_status_name,time,price,cover_Image,phone_number from orders join products on orders.Product_id  = products.id join users on orders.user_id = users.id join order_status on orders.Order_status	= order_status.id  order by orders.id desc limit 5";
  db.query(lastOrdersSql, (err, result) => {
    if (err) throw err;
    res.locals.lastOrders = result;
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
  LastFiveOrders,
  orderStaus,

  // count
  userCount,
  productsCount,
  ordarsCount,
  categoryCount,
};
