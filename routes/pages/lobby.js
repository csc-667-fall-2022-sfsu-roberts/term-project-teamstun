var express = require("express");
var router = express.Router();

router.get("/", function (request, response) {
  response.render("protected/lobby", {
    title: "Lobby",
    layout: "protected/home",
  });
});

module.exports = router;
