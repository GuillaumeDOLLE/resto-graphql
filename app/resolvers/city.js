const restaurantDataMapper = require("../datamappers/restaurant");

module.exports = {
    restaurants(parent){
        restaurantDataMapper.findByCity(parent.id);
    }
};
