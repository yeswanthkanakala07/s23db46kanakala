var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller  = require('../controllers/api');
var fruit_controller = require('../controllers/fruit');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Fruit', fruit_controller.Fruit_create_post);
// DELETE request to delete Costume.
router.delete('/Fruit/:id', fruit_controller.Fruit_delete);
// PUT request to update Costume.
router.put('/Fruit/:id', fruit_controller.Fruit_update_put);
// GET request for one Costume.
router.get('/Fruit/:id', fruit_controller.Fruit_detail);
// GET request for list of all Costume items.
router.get('/Fruit', fruit_controller.Fruit_list);
module.exports = router;