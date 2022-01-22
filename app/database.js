const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.PGURL, {
  define: {
    timestamps: false
  }
});

module.exports = sequelize;