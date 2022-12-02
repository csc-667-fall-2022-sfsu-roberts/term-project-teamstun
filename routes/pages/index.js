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

module.exports = router;
