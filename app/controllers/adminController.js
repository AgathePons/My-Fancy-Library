const {
  Category
} = require('../models/');

const adminController = {
  adminPage: (_req, res) => {
    res.render('adminPage', {
      title: 'Administration ✨'
    });
  },
  editCategoryPage: async (_req, res) => {
    try {
      const categories = await Category.findAll({
        include: 'books'
      });
      res.render('adminCategoryEdit', {
        title: 'Gérer les genres littéraires ✨',
        categories
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  },
  editCategoryAction : async (req, res) => {
    try {
      // check if id category exists
      const category = await Category.findByPk(req.params.id);
      const prevName = category.name;
      if (!category) {
        return res.render('adminCategoryEdit', {
          title: 'Ooopsi 😱',
          error: `Le genre littéraire ayant "${req.params.id}" pour id n'existe pas !`
        });
      }
      if(req.body.name) {
        category.name = req.body.name;
      }
      await category.save();
      const categories = await Category.findAll();
      return res.render('adminCategoryEdit', {
        title: 'Gérer les genres littéraires ✨',
        info: `Le genre littéraire ${prevName} a bien été transformé en ${category.name} !`,
        categories
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  },
  deleteCategoryAction: async (req, res) => {
    try {
      // check if id category exists
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.render('adminCategoryEdit', {
          title: 'Ooopsi 😱',
          error: `Le genre littéraire ayant "${req.params.id}" pour id n'existe pas !`
        });
      }
      await category.destroy();
      const categories = await Category.findAll();
      return res.render('adminCategoryEdit', {
        title: 'Gérer les genres littéraires ✨',
        info: `Le genre littéraire ${category.name} a bien été jeté dans la grande poubelle littéraire !`,
        categories
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  },
  addCategoryPage: (_req, res) => {
    res.render('adminCategoryAdd', {
      title: 'Ajouter un genre littéraire ✨'
    });
  },
  addCategoryAction: async (req, res) => {
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
      const categories = await Category.findAll();
      return res.render('adminCategoryEdit', {
        title: 'Gérer les genres littéraires ✨',
        info: `Le genre littéraire ${newCategory.name} a bien été inventé !`,
        categories
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  }
};

module.exports = adminController;