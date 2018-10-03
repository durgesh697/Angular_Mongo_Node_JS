// var passportLocalMongoose  = require('passport-local-mongoose');
// var localStrategy          = require('passport-local');
// var bodyParser             = require('body-parser');
// var passport               = require('passport');
var mongoose               = require('mongoose');
var express                = require('express');
var cors                   = require('cors');
// var user                   = require('./models/user');



var app = express();
app.use(express.json())

app.use(cors());

// app.use(require('express-sessions'))({
//     secret: 'The secret key!!!',
//     resave: false,
//     saveUninitialised: false
// })

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost/E-store");

var Inventory = new mongoose.Schema({
    category: String,
    image_url: String,
    name: String,
    price: Number,
    description: Array
});
var cartSchema = new mongoose.Schema({
    category: String,
    image_url: String,
    name: String,
    price: Number
});
var Product  = mongoose.model("Product", Inventory);

var Cart = mongoose.model('CartItem', cartSchema);

app.get('/api', function(req, res){
    Product.find({}, function(err, product){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.json(product);
        }
    })
});

app.get('/api/product/:id', function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            console.log('SOMETHING WENT WRONG WHICH IS :' + err);
        }
        else {
            res.json(product);
        }
    });
});

app.get('/api/categories', function(req, res){
    Product.distinct('category' , function(err, categories){
        if(err){
            res.send(err);
        }
        else{
            res.json(categories);
        }
    })
});

app.get('/api/cart', function(req, res){
    Cart.find({}, function(err, data){
        if(err){
            res.send(err);
        }
        else{
            res.json(data);
        }
    })
});

app.post('/api/cart', function(req, res){
    console.log(req.body);
    Cart.create({
        _id: req.body._id,
        category: req.body.category,
        image_url: req.body.image_url,
        name: req.body.name,
        price: req.body.price
    }, function(err, newCartItem){
        if(err){
            console.log('SOMETHING WENT WRONG!!');
        }
        else{
            console.log(newCartItem);
        }
    })
});

app.delete('/api/cart/:id', function(req, res){
    console.log(req.params.id);
    Cart.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log('SOMETHING WENT WRONG!!!');
        }
        else{
            console.log(req.params.id + 'deteled');
            res.json({success: true});
        }
    });
})


app.get('/api/categories/:cat', function(req, res){
    Product.find({'category': req.params.cat}, function(err, data){
        if(err){
            res.send('SOMETHING WENT WRONG');
        }
        else{
            res.json(data);
        }
    })
});

app.get('/api/cart/count', function(req, res){
    Cart.count({}, function(err, data){
        if(err){
            res.send('SONTHING WENT WRONG');
        }
        else{
            res.json({'a': data});
        }
    })
});


app.listen(3001, function(){
    console.log("Api started");
});

// module.exports = app;