const Sequelize = require('sequelize');

const conn = new Sequelize('postgres://localhost/tripplanner_db', {
  logging: false
});

module.exports = conn;
