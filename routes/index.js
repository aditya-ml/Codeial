//Entry point to all routes

const express = require("express");

const router = express.Router();

//access home_controller here
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home) // '/' is the url where I want to put it

//when the request if /users ie. path is/users, you can just require ./users

router.use('/users', require('./users'));
router.use('/posts', require('./posts'));

//for any further routes, access from here
//router.use('/routerName', require('./routerFile'));

module.exports = router; //tell app to use it
