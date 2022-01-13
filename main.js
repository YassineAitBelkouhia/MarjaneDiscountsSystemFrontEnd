"Use Strict";

const express = require("express"),
  app = express(),
  layouts = require("express-ejs-layouts"),
  httpStatusCodes = require("http-status-codes"),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController");

app.set("port", process.env.PORT || 3000), app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.get("/", homeController.home);
app.get("/centerlogin", homeController.centerLogin);
app.get("/aislelogin", homeController.aisleLogin);
app.get("/admin", homeController.adminLogin);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
