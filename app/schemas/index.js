const { gql } = require('apollo-server-express');
const { readFileSync } = require('fs');
const path = require("path");

// Je lie tous mes schémas ensemble
const query = readFileSync(path.join(__dirname,"./query.gql"));
const restaurant = readFileSync(path.join(__dirname,"./restaurant.gql"));
const manager = readFileSync(path.join(__dirname,"./manager.gql"));
const city = readFileSync(path.join(__dirname,"./city.gql"));
const cookingStyle = readFileSync(path.join(__dirname,"./cookingStyle.gql"));
const mutation = readFileSync(path.join(__dirname,"./mutation.gql"));

const schema = gql`

${restaurant}

${manager}

${city}

${cookingStyle}

${query}

${mutation}

scalar DateTime

`;

module.exports = schema;
