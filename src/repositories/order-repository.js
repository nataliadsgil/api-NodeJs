'use strict'
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async(data) =>{
    var res = await Order.find({},'number status')
    .populate('customer', 'name')
    .populate('items.product','title price');
    return res;
}
//populate trás a informação completa
exports.create = async(data) =>{
    var order = new Order(data);
    await order.save()
}
