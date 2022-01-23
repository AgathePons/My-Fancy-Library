const Sequelize = require('sequelize');
const sequelize = require('../database');

class Author extends Sequelize.Model {
  get fullname() {
    return this.firstname + ' ' + this.lastname;
  }
}

Author.init({
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING
}, {
  sequelize,
  tableName: 'author'
});

module.exports = Author;