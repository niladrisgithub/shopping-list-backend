const Skill = require('../models/shoppingList');

module.exports = {
    index,
  
};

function index(req, res) {
    Skill.find(function(){
        res.status(200)
    });
}