require("dotenv").config();
const debug = require("debug")("SERVER");

const { createServer } = require("http");
const { ApolloServer } = require("apollo-server-express");

const {app,apolloConfig} = require("./app");

const PORT = process.env.PORT ?? 3000;

const httpServer = createServer(app);

// Initialisation du serveru HTTP avec Apollo Server
const server = new ApolloServer(apolloConfig);

(async()=>{
    await server.start();
    server.applyMiddleware({app}); // liaison entre le serveur Apollo et notre serveur HTTP
    await httpServer.listen(PORT,()=>{
        debug("Apollo launched !")
    });
})();