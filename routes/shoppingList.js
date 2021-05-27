const express = require('express');
const router = express.Router();
const shoppingListCtrl = require('../controllers/shoppingList')

router.get('/', shoppingListCtrl.index)


module.exports = router;