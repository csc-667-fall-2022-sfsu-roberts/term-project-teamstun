var express = require("express");
var router = express.Router();

/* GET home page. */
router.get('/', (request, response) => {
  response.render('public/index', { title: 'Express', layout: 'public/landing'});
});

module.exports = router;
