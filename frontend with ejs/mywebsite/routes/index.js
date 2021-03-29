var express = require('express');
var router = express.Router();
var product_controller=require('../controllers/product.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Sell with Us',menuId: 'home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { page: 'About Us',menuId: 'about' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { page: 'Contact',menuId: 'contact' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { page: 'LogIn/SignUp',menuId: 'login' });
});

router.get('/products',product_controller.list)

module.exports = router;
