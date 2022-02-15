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
// Auteur
router.get('/admin/addAuthor', adminController.addAuthorPage);
router.post('/admin/addAuthor', adminController.addAuthorAction);
router.get('/admin/editAuthor', adminController.editAuthorPage);
router.post('/admin/editAuthor/:id', adminController.editAuthorAction);
router.get('/admin/deleteAuthor/:id', adminController.deleteAuthorAction);
// Category
router.get('/admin/addCategory', adminController.addCategoryPage);
router.post('/admin/addCategory', adminController.addCategoryAction);
router.get('/admin/editCategory', adminController.editCategoryPage);
router.post('/admin/editCategory/:id', adminController.editCategoryAction);
router.get('/admin/deleteCategory/:id', adminController.deleteCategoryAction);
// Edition
router.get('/admin/addEdition', adminController.addEditionPage);
router.post('/admin/addEdition', adminController.addEditionAction);
router.get('/admin/editEdition', adminController.editEditionPage);
router.post('/admin/editEdition/:id', adminController.editEditionAction);
router.get('/admin/deleteEdition/:id', adminController.deleteEditionAction);


module.exports = router;