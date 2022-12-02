var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (request, response) {
  response.render("protected/waitingroom", {
    title: "Waiting Room",
    layout: "protected/home",
  });
});

module.exports = router;
