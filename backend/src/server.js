const express = require('express');
const routes = require('./routes');
const server = express();

//GET, POST criar tipo de registro, PUT editar algum registro, DELETE

server.use(routes);

server.listen(3333);