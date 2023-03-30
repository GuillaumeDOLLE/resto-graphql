// Types
const Restaurant = require('./restaurant');
const Manager = require('./manager');
const City = require('./city');
const CookingStyle = require('./cookingStyle');
const Mutation = require('./mutation');

// Query and mutations
const Query = require('./query');


module.exports = {

    Restaurant,

    Manager,

    City,

    CookingStyle,

    // Liste des actions de récupération possibles
    Query,

    // Liste des actions de mise à jour des données possibles
    Mutation,
};
