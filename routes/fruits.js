var express = require('express');
const fruit_controller= require('../controllers/fruit');
var router = express.Router();


router.get('/', fruit_controller.fruit_view_all_Page);

router.get('/detail', fruit_controller.fruit_view_one_Page);
/* GET create costume page */
router.get('/create', fruit_controller.fruit_create_Page);
/* GET create update page */
router.get('/update', fruit_controller.fruit_update_Page);
/* GET delete costume page */
router.get('/delete', fruit_controller.fruit_delete_Page);
module.exports = router;
