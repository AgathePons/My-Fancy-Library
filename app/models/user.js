const Sequelize = require('sequelize');
const sequelize = require('../database');

class User extends Sequelize.Model {
  get fullname() {
    return this.firstname + ' ' + this.lastname;
  }
}

User.init({
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  mail: Sequelize.STRING,
  password: Sequelize.STRING,
  role: Sequelize.STRING
}, {
  sequelize,
  tableName: 'user'
});

module.exports = User;