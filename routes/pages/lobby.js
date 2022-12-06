var express = require("express");
var router = express.Router();

router.get('/', function (request, response) {
  const { username, userId } = request.session;
  response.render('protected/lobby', { title: "Lobby", layout: "protected/home", username, userId});
});

module.exports = router;
