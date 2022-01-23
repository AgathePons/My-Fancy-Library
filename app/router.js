const express = require('express');
const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController');

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/book/:id', mainController.bookDetail);

router.get('/signup', userController.signupPage);
router.post('/signup', userController.signupAction);

module.exports = router;