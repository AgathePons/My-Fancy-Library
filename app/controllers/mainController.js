const dataMapper = require('../dataMapper');


const mainController = {
  homePage: async (_req, res, next) => {
    try {
      const books = await dataMapper.getAllBooks();
      if(books) {
        res.render('homepage', {
          books
        });
      } else {
        next();
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('There is an error 500!');
    }
  },
  
  bookDetail: async (req, res, next) => {
    const id = req.params.id;
    try {
      const book = await dataMapper.getOneBook(id);
      if(book) {
        res.render('bookPage', {
          book
        });
      } else {
        next();
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('There is an error 500!');
    }
  }
};

module.exports = mainController;