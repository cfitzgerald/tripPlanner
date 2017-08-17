const conn = require('./db');
const Sequelize = conn.Sequelize;

const Restaurant = conn.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER(5) // RANGE?
  }
});

module.exports = Restaurant;
