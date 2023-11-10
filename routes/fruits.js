var express = require('express');
const fruit_controller= require('../controllers/fruit');
var router = express.Router();


router.get('/', fruit_controller.fruit_view_all_Page);


module.exports = router;
