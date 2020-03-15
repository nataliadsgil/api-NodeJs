'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    
    number:{
        type: String,
        required: [true, 'O nome é obrigatório'],
        trim: true
    },
    createData:{
        type: Date,
        required: true,
        default: Date.now
    },
    status:{
        type: String,
        required: true,
        enum:['created', 'done'],
        default:'created'
    },
    items: [{
        quantity:{
            type: Number,
            require: true,
            default: 1
        },
        price:{
            type: Number,
            require: true
        },
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }], 
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers'
    }
});


module,exports = mongoose.model('Order',schema);