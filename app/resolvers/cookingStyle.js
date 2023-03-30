const restaurantDatamapper = require('../datamappers/restaurant');

module.exports = {
    restaurants(parent) {
        return restaurantDatamapper.findByCookingStyle(parent.id);
    },
};
