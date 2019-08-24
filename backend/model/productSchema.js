const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema ({
    name: {type:String, required:true, unique:true},
    brand: {type:String},
    form: {type:String},
    category: {type:[String]},
    price: {type:Number},
    description: {type:[String]},
    descriptionBullets: {type:[String]},
    direction: {type:String},
    quantity: {type:String},
    ingredients: {type:[String]},
    warnings: {type:String},
    image: {type:String},
    popular: {type:Boolean}
});

const product = mongoose.model('product', productSchema);

module.exports = product;