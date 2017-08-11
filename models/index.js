const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const sync = ()=> {
  return conn.sync({ force: true });
};

const Place = conn.define('place', {
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }
});

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

const Activity = conn.define('activity', {
  name: {
    type: Sequelize.STRING
  },
  age_range: {
    type: Sequelize.STRING
  }
});

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

// ASSOCIATIONS
// hotel --> place

// activity --> place

// restaurant --> place

// EXPORTS
module.exports = {
  sync,
  models: {
    Place,
    Hotel,
    Activity,
    Restaurant
  }
};
