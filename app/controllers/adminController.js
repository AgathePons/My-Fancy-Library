const {
  Book
} = require('../models/');

const adminController = {
  adminPage: (_req, res) => {
    res.render('adminPage', {
      title: 'Administration ✨'
    });
  },
  addCategoryPage: (_req, res) => {
    res.render('adminCategoryAdd', {
      title: 'Ajouter un genre littéraire ✨'
    });
  }
};

module.exports = adminController;