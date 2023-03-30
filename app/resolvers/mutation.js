const restaurantDatamapper = require('../datamappers/restaurant');

module.exports = {
    createRestaurant(_, args) {
        return restaurantDatamapper.create(args.input);
    }
};
