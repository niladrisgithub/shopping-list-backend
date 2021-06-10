const express = require('express');
const router = express.Router();
const shoppingListCtrl = require('../controllers/shoppingList')

router.get('/', isAuthenticated, shoppingListCtrl.index);
router.post('/', shoppingListCtrl.create);
router.put('/:id', isAuthenticated, shoppingListCtrl.update);
router.delete('/:id', isAuthenticated, shoppingListCtrl.delete);


function isAuthenticated(req, res, next) {
    if(!req.query.uid) return res.status(401).json({error: 'user must be logged in'});
    next();
}

module.exports = router;