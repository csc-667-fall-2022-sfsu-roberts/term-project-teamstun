var express = require("express");
var router = express.Router();

router.get('/', function (request, response) {
  const { username, authenticated } = request.session;
  console.log({ authenticated });
  response.render('protected/lobby', { title: "Lobby", layout: "protected/home", username, authenticated });
});

module.exports = router;
