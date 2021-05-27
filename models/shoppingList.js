const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingListSchema = new Schema ({
    item: String,
    quantity: Number,
    unit: String,
 }, { timestamps: true
})