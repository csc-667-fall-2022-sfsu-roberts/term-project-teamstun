var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (request, response) {
  response.render("public/index", {
    title: "TEAMSTUN",
    layout: "public/landing",
  });
});

router.get("/index", function (request, response) {
  response.render("public/index", {
    title: "TEAMSTUN",
    layout: "public/landing",
  });
});

router.get("/login", function (request, response) {
  response.render("public/login", {
    title: "Log in",
    layout: "public/landing",
  });
});

router.get("/lobby", function (request, response) {
  response.render("public/lobby", {
    title: "Lobby",
    layout: "public/landing",
  });
});

router.get("/signup", function (request, response) {
  response.render("public/signup", {
    title: "Sign up",
    layout: "public/landing",
  });
});

module.exports = router;
