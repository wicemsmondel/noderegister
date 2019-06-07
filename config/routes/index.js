var express = require('express');
var router = express.Router();
var indexController = require('../../controllers/indexController');


router.route('/')
    .get(indexController.home);

router.route('/login')
    .get(indexController.login)
    .post(indexController.login);

router.route('/signup')
    .get(indexController.signup)
    .post(indexController.signup);

// router.route('/auth/facebook')
//     .get(indexController.home);

module.exports = router;