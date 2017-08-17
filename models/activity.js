const conn = require('./db');
const Sequelize = conn.Sequelize;

const Activity = conn.define('activity', {
  name: {
    type: Sequelize.STRING
  },
  age_range: {
    type: Sequelize.STRING
  }
});

module.exports = Activity;
