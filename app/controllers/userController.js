const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const {
  User
} = require('../models/');

const userController = {
  signupPage: (_req, res) => {
    res.render('signup', {
      title: 'Je m\'inscris <3'
    });
  },
  signupAction: async (req, res) => {
    try {
      // check if mail is already used
      const user = await User.findOne({
        where: {
          mail: req.body.mail
        }
      });
      if (user) {
        return res.render('signup', {
          title: 'Ooopsi 😱',
          error: 'Cet email est déjà utilisé !'
        });
      }
      // check if email is valid
      if (!emailValidator.validate(req.body.mail)) {
        return res.render('signup', {
          title: 'Ooopsi 😱',
          error: 'Cet email n\'est pas valide !'
        });
      }
      // check if password === passwordConfirm
      if (req.body.password !== req.body.passwordConfirm) {
        return res.render('signup', {
          title: 'Ooopsi 😱',
          error: 'La confirmation du mot de passe ne correspond pas !'
        });
      }
      // encrypt password
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(req.body.password, salt);

      // create new User
      const newUser = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mail: req.body.mail,
        password: encryptedPassword
      });
      newUser.save();

      // create locals to signin page
      //! set password to null instead of delete
      newUser.password = null;
      req.session.user = newUser;
      res.redirect('/');

    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  },
  signinPage: (_req, res) => {
    res.render('signin', {
      title: 'Je me connecte <3'
    });
  },
  signinAction: async (req, res) => {
    try {
      // check if mail exists
      const user = await User.findOne({
        where: {
          mail: req.body.mail
        }
      });
      if (!user) {
        return res.render('signin', {
          title: 'Ooopsi 😱',
          error: 'On dirait que le mail ou le mot de passe est incorrect !'
        });
      }
      // check password (true if ok)
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) {
        return res.render('signin', {
          title: 'Ooopsi 😱',
          error: 'On dirait que le mail ou le mot de passe est incorrect !'
        });
      }
      // if ok
      //! why delete does not work?
      delete user.password;
      //! set to null instead of delete
      user.password = null;
      //console.log('user pswd:', user.password);
      //console.log('user:', user);
      req.session.user = user;
      //delete req.session.user.password;
      //console.log('session pswd:', req.session.user.password);
      //console.log('session:', req.session.user);

      res.redirect('/');
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  },
  disconnect: (req, res) => {
    req.session.user = false;
    return res.redirect('/');
  }
};

module.exports = userController;