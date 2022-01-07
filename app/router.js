const express = require('express');
const favController = require('./controllers/favController');
const mainController = require('./controllers/mainController');

const router = express.Router();

router.use('/', favController.checkSessionFav);

router.get('/', mainController.homePage);
router.get('/book/:id', mainController.bookDetail);

router.get('/fav', favController.favPage);
router.get('/fav/add/:id', favController.addFav);
router.get('/fav/remove/:id', favController.removeFav);

router.use('/test', favController.isFav);
router.get('/test', favController.testPage);

module.exports = router;