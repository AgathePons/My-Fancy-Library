const dataMapper = require('../dataMapper');

const favController = {
  checkSessionFav: (req, _res, next) => {
    if(!req.session.fav) {
      req.session.fav = [];
    }
    next();
  },
  favPage: (req, res) => {
    //!
    console.log(req.session.fav);
    res.render('homepage', {
      books: req.session.fav,
      title: 'Mes Livres préférés <3'
    });
  },
  addFav: async (req, res) => {

  },
  removeFav: (req, res) => {

  }
};

module.exports = favController;