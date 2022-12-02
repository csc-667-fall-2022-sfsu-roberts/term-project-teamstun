var express = require("express");
var router = express.Router();

router.get("/", function (request, response) {
  response.render("public/login", {
    title: "Log in",
    layout: "public/landing",
  });
});

  module.exports = router;