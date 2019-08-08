const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const routes = require('./routes');
const server = express();

//GET, POST criar tipo de registro, PUT editar algum registro, DELETE

mongoose.connect('mongodb+srv://User:user@cluster0-gyipz.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);