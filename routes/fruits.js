var express = require('express');
const fruit_controller= require('../controllers/fruit');
var router = express.Router();


router.get('/', fruit_controller.fruit_view_all_Page);

router.get('/detail', fruit_controller.fruit_view_one_Page);
module.exports = router;
