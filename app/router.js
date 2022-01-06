const express = require('express');
const favController = require('./controllers/favController');
const mainController = require('./controllers/mainController');

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/book/:id', mainController.bookDetail);

router.use('/fav', favController.checkSessionFav);
router.get('/fav', favController.favPage);
router.get('/fav/add/:id', favController.addFav);

module.exports = router;