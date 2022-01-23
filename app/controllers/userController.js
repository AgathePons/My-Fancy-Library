const emailValidator = require('email-validator');
const { User } = require('../models/');

const userController = {
  signupPage: (_req, res) => {
    res.render('signup', {
      title: 'Je m\'inscris <3'
    });
  },
  signupAction: async (req, res) => {
    console.log(req.body);
    try {
      // check if mail is already used
      const user = await User.findOne({
        where: {
          mail: req.body.mail
        }
      });
      if(user) {
        return res.render('signup', {
          title: 'Ooopsi 😱',
          error: 'Cet email est déjà utilisé !'
        });
      }
      // check if email is valid
      if(!emailValidator.validate(req.body.mail)) {
        return res.render('signup', {
          title: 'Ooopsi 😱',
          error: 'Cet email n\'est pas valide !'
        });
      }
      // check if password === passwordConfirm
      if(req.body.password !== req.body.passwordConfirm) {
        return res.render('signup', {
          title: 'Ooopsi 😱',
          error: 'La confirmation du mot de passe ne correspond pas !'
        });
      }
      // encrypt password
      // TODO

      // create new User
      await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mail: req.body.mail,
        password: req.body.password
      });
      res.redirect('/');

    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('There is an error 500:', err);
    }
  }
};

module.exports = userController;