const Sequelize = require('sequelize');
const sequelize = require('../database');

class Book extends Sequelize.Model {}

Book.init({
  title: Sequelize.STRING,
  abstract: Sequelize.STRING,
  year: Sequelize.NUMBER,
  cover: Sequelize.STRING
}, {
  sequelize,
  tableName: 'book'
});

module.exports = Book;