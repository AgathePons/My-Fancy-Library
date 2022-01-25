const express = require('express');
const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController');
const adminController = require('./controllers/adminController');
const adminMiddleware = require('./middlewares/admin');

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/book/:id', mainController.bookDetail);

router.get('/signup', userController.signupPage);
router.post('/signup', userController.signupAction);
router.get('/signin', userController.signinPage);
router.post('/signin', userController.signinAction);
router.get('/disconnect', userController.disconnect);

router.use('/admin', adminMiddleware);
router.get('/admin', adminController.adminPage);
//TODO edit/delete
router.get('/admin/addCategory', adminController.addCategoryPage);

module.exports = router;