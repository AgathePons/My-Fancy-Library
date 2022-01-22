const Sequelize = require('sequelize');
const sequelize = require('../database');

class Author extends Sequelize.Model {}

Author.init({
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING
}, {
  sequelize,
  tableName: 'author'
});

module.exports = Author;