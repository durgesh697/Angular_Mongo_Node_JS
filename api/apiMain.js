var express = require('express');

var app = express();
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/E-store");

var Inventory = new mongoose.Schema({
    category: String,
    image_url: String,
    name: String,
    price: Number,
    description: Array
});

var Product = mongoose.model("Product", Inventory);

Product.create({
    "category": "Bicycle",
    "image_url": "../assets/images/cycle2.jpg",
    "name": "HERO avenger black-blue non-gear bicycle",
    "price": "7999",
    "description": [
        "Screen Size (In Inches) 6.2 Display Technology Super Amoled",
        "Screen Resolution (In Pixels) 1440 X 2560 Display",
        "Features Capacitive Touchscreen Pixel Density (Ppi) 529",
        "Scratch Resistant Glass Corning Gorilla Glass 5 To The Body"
    ]
}, function (err, product) {
    if (err) {
        console.log("SOMETHING WENT WRONG!!");
    }
    else {
        console.log(product);
    }
});

Product.find({}, function (err, products) {
    if (err) {
        console.log("SOMETHING WENT WRONG !!!");
    }
    else {
        console.log(products);
    }
})  