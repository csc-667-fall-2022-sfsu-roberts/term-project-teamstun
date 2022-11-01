var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  response.render('protected/index', { title: 'Express', layout: 'protected/game'});
});

router.get('/:id', function(request, response) {
  const { id } = request.params;
  response.render('protected/index', { title: 'Express', layout: 'protected/game', id});
});

module.exports = router;

