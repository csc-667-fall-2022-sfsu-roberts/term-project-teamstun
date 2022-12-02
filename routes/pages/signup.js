var express = require("express");
var router = express.Router();

router.get("/", function (request, response) {
    response.render("public/signup", {
      title: "Sign up",
      layout: "public/landing",
    });
  });

  module.exports = router;