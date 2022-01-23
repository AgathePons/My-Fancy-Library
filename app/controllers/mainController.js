const {
  Book
} = require('../models');

const mainController = {
  // Home page
  homePage: async (_req, res, next) => {
    try {
      const books = await Book.findAll({
        include: ['author', 'edition']
      });
      if(books) {
        res.render('homepage', {
          books,
          title: 'Tous mes livres <3'
        });
      } else {
        next();
      }
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  },
  // Book page
  bookDetail: async (req, res, next) => {
    const id = req.params.id;
    try {
      const book = await Book.findByPk(id, {
        include: ['author', 'edition', 'categories', 'comments']
      });
      if(book){
        res.render('bookPage', {
          book
        });
      } else {
        next();
      }
      
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  }
};

module.exports = mainController;