const dataMapper = require('../dataMapper');

const favController = {
  checkSessionFav: (req, _res, next) => {
    if(!req.session.fav) {
      req.session.fav = [];
    }
    next();
  },
  favPage: (req, res) => {
    res.render('homepage', {
      books: req.session.fav,
      title: 'Mes Livres préférés <3'
    });
  },
  isFav: async (req, res, next) => {
    // check
    try {
      const books = await dataMapper.getAllBooks();
      if(books) {
        for(book of books) {
          const bookInFavs = req.session.fav.find(bookID => {
            return bookID.id === book.id;
          });
          if(bookInFavs) {
            book.inFav = true;
          } else {
            book.infav = false;
          }
        }
        console.log('isfav:', books);
        res.locals.books = books;
        next();
      } else {
        next();
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('There is an error 500!');
    }
  },
  testPage: (req, res) => {
    res.render('test', {
      title: 'test'
    });
  },
  addFav: async (req, res) => {
    const id = req.params.id;
    const bookInFavs = req.session.fav.find(book => {
      return book.id === Number(id);
    });
    //! LOG
    console.log('books:', bookInFavs);
    if(!bookInFavs) {
      try {
        const book = await dataMapper.getOneBook(id);
        req.session.fav.push(book);
      } catch {
        console.error('Error:', error);
      res.status(500).send('There is an error 500!');
      }
    }
    res.redirect('/fav');
  },
  removeFav: (req, res) => {
    const id = req.params.id;
    req.session.fav = req.session.fav.filter(favoris => favoris.id !== Number(id));
    res.redirect('/fav');
  }
};

module.exports = favController;