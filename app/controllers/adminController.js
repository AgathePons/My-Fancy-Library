const { Op } = require('sequelize');
const {
  Author,
  Category,
  Edition
} = require('../models/');

const adminController = {
  adminPage: (_req, res) => {
    res.render('adminPage', {
      title: 'Administration ✨'
    });
  },
  // #region Author
  editAuthorPage: async (_req, res) => {
    try {
      const authors = await Author.findAll({
        include: 'books'
      });
      res.render('adminAuthorEdit', {
        title: 'Gérer les auteur·e·s ✨',
        authors
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  },
  editAuthorAction : async (req, res) => {
    try {
      // check if id author exists
      const author = await Author.findByPk(req.params.id);
      const prevName = author.fullname;
      if (!author) {
        return res.render('adminAuthorEdit', {
          title: 'Ooopsi 😱',
          error: `L'auteur·e ayant "${req.params.id}" pour id n'existe pas !`
        });
      }
      if(req.body.firstname) {
        author.firstname = req.body.firstname;
      }
      if(req.body.lastname) {
        author.lastname = req.body.lastname;
      }
      await author.save();
      const authors = await Author.findAll();
      return res.render('adminAuthorEdit', {
        title: 'Gérer les auteur·e·s ✨',
        info: `L'auteur·e ${prevName} a bien été transformé en ${author.fullname} !`,
        authors
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  },
  deleteAuthorAction: async (req, res) => {
    try {
      // check if id author exists
      const author = await Author.findByPk(req.params.id);
      if (!author) {
        return res.render('adminAuthorEdit', {
          title: 'Ooopsi 😱',
          error: `L'auteur·e ayant "${req.params.id}" pour id n'existe pas !`
        });
      }
      await author.destroy();
      const authors = await Author.findAll();
      return res.render('adminAuthorEdit', {
        title: 'Gérer les auteur·e·s ✨',
        info: `L'auteur·e ${author.fullname} a bien été jeté dans la grande poubelle littéraire !`,
        authors
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  },
  addAuthorPage: (_req, res) => {
    res.render('adminAuthorAdd', {
      title: 'Ajouter un·e auteur·e ✨'
    });
  },
  addAuthorAction: async (req, res) => {
    try {
      // check if author already exists
      const author = await Author.findOne({
        where: {
          [Op.and]: [
            {firstname: req.body.firstname},
            {lastname: req.body.lastname}
          ]
        }
      });
      if (author) {
        return res.render('adminAuthorAdd', {
          title: 'Ooopsi 😱',
          error: 'Cet·te auteur·e existe déjà !'
        });
      }
      const newAuthor = await Author.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname
      });
      const authors = await Author.findAll();
      return res.render('adminAuthorEdit', {
        title: 'Gérer les auteur·e·s ✨',
        info: `L'auteur·e ${newAuthor.fullname} a bien été inventé !`,
        authors
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  },
  // #endregion Author
  // #region Category
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
  },
  // #endregion Category
  // #region Edition
  editEditionPage: async (_req, res) => {
    try {
      const editions = await Edition.findAll({
        include: 'books'
      });
      res.render('adminEditionEdit', {
        title: 'Gérer les genres maisons d\'édition ✨',
        editions
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  },
  editEditionAction : async (req, res) => {
    try {
      // check if id category exists
      const edition = await Edition.findByPk(req.params.id);
      const prevName = edition.name;
      if (!edition) {
        return res.render('adminEditionEdit', {
          title: 'Ooopsi 😱',
          error: `La maison d'édition ayant "${req.params.id}" pour id n'existe pas !`
        });
      }
      if(req.body.name) {
        edition.name = req.body.name;
      }
      await edition.save();
      const editions = await Edition.findAll();
      return res.render('adminEditionEdit', {
        title: 'Gérer les maison d\'édition ✨',
        info: `La maison d'édition ${prevName} a bien été transformée en ${edition.name} !`,
        editions
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  },
  deleteEditionAction: async (req, res) => {
    try {
      // check if id category exists
      const edition = await Edition.findByPk(req.params.id);
      if (!edition) {
        return res.render('adminEditionEdit', {
          title: 'Ooopsi 😱',
          error: `La maison d'édition ayant "${req.params.id}" pour id n'existe pas !`
        });
      }
      await edition.destroy();
      const editions = await Edition.findAll();
      return res.render('adminEditionEdit', {
        title: 'Gérer les maison d\'édition ✨',
        info: `La maison d'édition ${edition.name} a bien été jeté dans la grande poubelle littéraire !`,
        editions
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  },
  addEditionPage: (_req, res) => {
    res.render('adminEditionAdd', {
      title: 'Ajouter une maison d\'édition ✨'
    });
  },
  addEditionAction: async (req, res) => {
    try {
      // check if edition already exists
      const edition = await Edition.findOne({
        where: {
          name: req.body.name
        }
      });
      if (edition) {
        return res.render('adminEditionAdd', {
          title: 'Ooopsi 😱',
          error: 'Cette maison d\'édition existe déjà !'
        });
      }
      const newEdition = await Edition.create({
        name: req.body.name
      });
      const editions = await Edition.findAll();
      return res.render('adminEditionEdit', {
        title: 'Gérer les maisons d\'édition ✨',
        info: `La maison d'édition ${newEdition.name} a bien été inventé !`,
        editions
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  }
  // #endregion Edition
};

module.exports = adminController;