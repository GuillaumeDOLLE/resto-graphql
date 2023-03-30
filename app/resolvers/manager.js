const restaurantDatamapper = require('../datamappers/restaurant');

module.exports = {
    restaurants(parent) {
        return restaurantDatamapper.findAll({ $where: { manager_id: parent.id } });
    },
};
