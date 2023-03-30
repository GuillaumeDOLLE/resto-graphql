const managerDatamapper = require('../datamappers/manager');
const cityDatamapper = require('../datamappers/city');
const cookingStyleDatamapper = require('../datamappers/cookingStyle');

module.exports = {
    city(parent) {
        return cityDatamapper.findByPk(parent.city_id);
    },
    manager(parent) {
        return managerDatamapper.findByPk(parent.manager_id);
    },
    cookingStyles(parent) {
        return cookingStyleDatamapper.findByRestaurant(parent.id);
    },
};
