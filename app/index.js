const path = require('path');
const express = require('express');

const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const app = express();

app.use(express.static(path.join(__dirname,'../public')));

module.exports = {
    app,
    apolloConfig:{
        typeDefs,// les types que nous pouvons requêter
        resolvers// les resolvers des types que nous pouvons requêter
    }
};
