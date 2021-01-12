const mogoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let Schema = mogoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}

let usuarioSchema = new Schema({
    caja: {
        type: Number,
        required: [true, 'Numero de  caja es requerido']
    },
   
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type:Boolean,
        default: true
    },
   
});

usuarioSchema.plugin(uniqueValidator, {message: '{PATH} debe ser único'});

usuarioSchema.methods.toJSON = function () {
    let user = this;
    let userObjet = user.toObject();
    delete userObjet.password;

    return userObjet;
}

module.exports = mogoose.model('Usuario', usuarioSchema);