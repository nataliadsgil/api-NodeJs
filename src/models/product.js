'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    //_id
    title:{
        type: String,
        required: [true, 'O titulo é obrigatório'],
        trim: true
    },
    slug: {//Compor url ex: Cadeira Gamer = cadeira-gamer
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    description:{
        type: String,
        required: [true, 'O descrição é obrigatória'],
    },
    price:{
        type: Number,
        required: [true, 'O preço é obrigatório'],
    },
    active: {
        type:Boolean,
        required:[true, 'O active é obrigatória'],
        default: true
    },
    tag:[{
        type: String,
        require: true
    }]

});


module,exports = mongoose.model('Product',schema);