const restaurantDatamapper = require('../datamappers/restaurant');
const managerDatamapper = require('../datamappers/manager');
const cityDatamapper = require('../datamappers/city');
const cookingStyleDatamapper = require('../datamappers/cookingStyle');

// Chaque méthode présente dans le type Query doit se trouver ici, c'est notre point d'entrée à une requête
module.exports = {
    getAllRestaurants() {
        return restaurantDatamapper.findAll();
    },

    getRestaurant(_, args) {
        return restaurantDatamapper.findByPk(args.id);
    },

    getAllManagers() {
        return managerDatamapper.findAll();
    },

    getManager(_, args) {
        return managerDatamapper.findByPk(args.id);
    },

    getAllCity() {
        return cityDatamapper.findAll();
    },

    getCity(_, args) {
        return cityDatamapper.findByPk(args.id);
    },

    getAllCookingStyles() {
        return cookingStyleDatamapper.findAll();
    },

    getCookingStyle(_, args) {
        return cookingStyleDatamapper.findByPk(args.id);
    },
};
