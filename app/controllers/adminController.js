const {
  Category
} = require('../models/');

const adminController = {
  adminPage: (_req, res) => {
    res.render('adminPage', {
      title: 'Administration ✨'
    });
  },
  editCategoryPage: (_req, res) => {
    res.render('adminCategoryEdit', {
      title: 'Gérer les genres littéraires ✨'
    });
  },
  addCategoryPage: (_req, res) => {
    res.render('adminCategoryAdd', {
      title: 'Ajouter un genre littéraire ✨'
    });
  },
  addCategoryAction: async (req, res) => {
    //!
    console.log(req.body);
    try {
      // check if category already exists
      const category = await Category.findOne({
        where: {
          name: req.body.name
        }
      });
      if (category) {
        return res.render('adminCategoryAdd', {
          title: 'Ooopsi 😱',
          error: 'Ce genre littéraire existe déjà !'
        });
      }
      const newCategory = await Category.create({
        name: req.body.name
      });
      return res.render('adminCategoryEdit', {
        title: 'Gérer les genres littéraires ✨',
        info: `Le genre littéraire ${newCategory.name} a bien été inventé !`
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  }
};

module.exports = adminController;