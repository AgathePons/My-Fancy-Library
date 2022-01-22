const Sequelize = require('sequelize');
const sequelize = require('../database');

class Comment extends Sequelize.Model {}

Comment.init({
  text: Sequelize.STRING
}, {
  sequelize,
  tableName: 'comment'
});

module.exports = Comment;