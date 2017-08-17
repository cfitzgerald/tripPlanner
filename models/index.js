const conn = require('./db');

const Place = require('./place.js');
const Restaurant = require('./restaurant.js');
const Hotel = require('./hotel.js');
const Activity = require('./activity.js');

//ASSOCIATIONS
Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

//SYNC & SEED
const sync = () => {
  return conn.sync({ force: true });
};

// EXPORTS
module.exports = conn;
