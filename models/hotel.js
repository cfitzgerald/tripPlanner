const conn = require('./db');
const Sequelize = conn.Sequelize;

const Hotel = conn.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.FLOAT(5,1)
  },
  amenities: {
    type: Sequelize.STRING
  }
});

module.exports = Hotel;
