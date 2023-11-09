var fruit = require('../models/fruit');
// List of all Costumes
exports.fruit_list = function(req, res) {
    res.send('NOT IMPLEMENTED: fruit list');
};

// for a specific Costume.
exports.fruit_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: fruit detail: ' + req.params.id);
};

// Handle Costume create on POST.
exports.fruit_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: fruit create POST');
};

// Handle Costume delete form on DELETE.
exports.fruit_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: fruit delete DELETE ' + req.params.id);
};

// Handle Costume update form on PUT.
exports.fruit_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: fruit update PUT' + req.params.id);
};

// List of all Fruits
exports.fruit_list = async function(req, res) {
    try {
        thefruit = await fruit.find();
        res.send(thefruit);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.fruit_view_all_Page = async function(req, res) {
    try {
        thefruits = await fruit.find();
        res.render('fruit', { title: 'Fruit Search Results', results: thefruits });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



// Handle Costume create on POST.
exports.fruit_create_post = async function(req, res) {
    console.log(req.body)
    let document = new fruit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"name":"goa", "color":"green", "quantity":10}
    document.name = req.body.name;
    document.color = req.body.color;
    document.quantity = req.body.quantity;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    