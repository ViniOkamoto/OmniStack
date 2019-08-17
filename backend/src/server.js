const express = require('express');
const mongoose = require('mongoose')

const cors = require('cors');
const routes = require('./routes');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server);
/* socket.io é uma forma de criarmos conexão entre o servidor e o externo,
aqui basicamente estamos fazendo conexão com o http */
const connectedUsers = {
}
io.on('connection', socket=>{
    const { user } = socket.handshake.query;
    console.log(user, socket.id);
      connectedUsers[user] = socket.id
});
//GET, POST criar tipo de registro, PUT editar algum registro, DELETE

mongoose.connect('mongodb+srv://User:user@cluster0-gyipz.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true
});
// next é basicamente para dar continuidade ao fluxo da aplicação
app.use((req,res,next) =>{
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);