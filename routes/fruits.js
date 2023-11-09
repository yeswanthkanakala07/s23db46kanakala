var express = require('express');
const fruit_controlers= require('../controllers/fruit');
var router = express.Router();


router.get('/', fruit_controlers.fruit_view_all_Page);

module.exports = router;
