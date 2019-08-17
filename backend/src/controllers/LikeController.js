const Dev = require("../models/Dev");
/* aqui é onde há o controle do like */

module.exports = {
  async store(req,res){
      console.log(req.io, req.connectedUsers);
      const {user} = req.headers;
      const {devId} = req.params;
/* primeiro o servidor irá buscar o usuário e o id, que é o meio de identificarmos
o usuário.*/
    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);
/*pós isso atribuímos aos consts o usuário logado, e o alvo que estara 
recebendo like, pois é a forma de identificarmos o evento */
    if(!targetDev){
        return res.status(400).json({error:'Dev not exists'});
    /*este é um retorno caso o servidor não ache o usuário */
    }

    if(targetDev.likes.includes(loggedDev._id)){
        const loggedSocket = req.connectedUsers[user];
        const targetSocket = req.connectedUsers[devId];

        if(loggedSocket){
            req.io.to(loggedSocket).emit('match', targetDev);
        }

        if(targetSocket) {
            req.io.to(targetSocket).emit('match', loggedDev);
        }
    /*aqui verificamos se o dev que está recebendo like, foi recíproco
    ele identificaram os likes e mandara no console a mensagem match */
    }
    loggedDev.likes.push(targetDev._id);
    /*aqui empurramos para lista de likes o dev que está sendo curtido */
    await loggedDev.save();
    /*aqui é onde salvamos o processo */
    return res.json(loggedDev);
    /*aqui é onde comunicamos ao servidor sobre o processo */    
    }
}