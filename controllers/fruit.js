var Costume = require('../models/fruit');
// List of all Costumes
exports.Fruit_list = function(req, res) {
res.send('NOT IMPLEMENTED: Fruit list');
};
// for a specific Costume.
exports.Fruit_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Fruit detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Fruit_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Fruit create POST');
};
// Handle Costume delete form on DELETE.
exports.Fruit_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Fruit delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Fruit_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Fruit update PUT' + req.params.id);
};
