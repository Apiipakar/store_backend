const express = require("express");
const cookieParer = require("cookie-parser");
const session = require("express-session");

const path = require("path");
const app = express();

// set view to ejs
app.set("view engine", "ejs");

// use public folder for static
app.use(express.static("Public"));
app.use(express.static("Uploads"));

//use mildewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParer());
app.use(
  session({
    cookie: {
      maxAge: 20 * 60 * 60 * 1000,
      httpOnly: true,
    },
    secret: "somict_secret",
    resave: false,
    saveUninitialized: false,
  })
);

// database
const db = require("./Models/Connections");

// require setuped multer file
const upload = require("./Models/myMulter");
// declare routes
const login = require("./Routes/LoginRoutes");
const dashboard = require("./Routes/DashboardRoutes");
const category = require("./Routes/CategoryRoutes");
const order = require("./Routes/OrderRoutes");
const product = require("./Routes/ProductRoutes");
const setting = require("./Routes/SettingRoutes");
const users = require("./Routes/UserRoutes");

// use routes
app.use(login);
app.use(dashboard);
app.use(category);
app.use(order);
app.use(product);
app.use(setting);
app.use(users);

// listen port
const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
