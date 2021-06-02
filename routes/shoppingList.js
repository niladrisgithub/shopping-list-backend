const express = require('express');
const router = express.Router();
const shoppingListCtrl = require('../controllers/shoppingList')

router.get('/', shoppingListCtrl.index);
router.post('/', shoppingListCtrl.create);
router.put('/:id', shoppingListCtrl.update);
router.delete('/:id', shoppingListCtrl.delete);


module.exports = router;