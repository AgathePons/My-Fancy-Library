const Sequelize = require('sequelize');
const sequelize = require('../database');

class Edition extends Sequelize.Model {}

Edition.init({
  name: Sequelize.STRING
}, {
  sequelize,
  tableName: 'edition'
});

module.exports = Edition;