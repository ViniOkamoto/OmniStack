const {Schema, model} = require('mongoose');

const DevSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    user:{
      type: String,
      required: true,  
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],

}, {
    timestamps: true,
});

module.exports = model('Dev', DevSchema);

// createdAt - salva automaticamente a data de criação de um registro no banco de dados
// updatedAt - armazena a data da ultima atualização! Os dois são preenchidos automaticamente pelo moongose
