var express = require('express');
const fruit_controller= require('../controllers/fruit');
var router = express.Router();

//new code for Assignment13
//A little function to check if we have an authorized user and continue on or
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 


router.get('/', fruit_controller.fruit_view_all_Page);

router.get('/detail',secured, fruit_controller.fruit_view_one_Page);
/* GET create costume page */
router.get('/create',secured, fruit_controller.fruit_create_Page);
/* GET create update page */
router.get('/update',secured, fruit_controller.fruit_update_Page);
/* GET delete costume page */
router.get('/delete',secured, fruit_controller.fruit_delete_Page);
module.exports = router;
