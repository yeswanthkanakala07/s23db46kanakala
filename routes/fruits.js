var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('fruits', { title: 'Search Results- Fruits' });
});

module.exports = router;
