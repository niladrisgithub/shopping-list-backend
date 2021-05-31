const ShoppingList = require('../models/shoppingList');

module.exports = {
    index,
    create,
    update,

};

function index(req, res) {
    ShoppingList.find({uid: req.query.uid }, function (err, shoppingList) {
        res.status(200).json(shoppingList);
    });
}

function create(req, res) {
    ShoppingList.create(req.body, function (err, shoppingList) {
        res.status(201).json(shoppingList);
    });
}

function update(req, res) {
    ShoppingList.findByIdAndUpdate(req.params.id, req.body, function (err, shoppingList) {
        index(req, res);
    });
}

