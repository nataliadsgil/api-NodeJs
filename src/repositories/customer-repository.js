'use strict'
const mongoose = require('mongoose');
const customers = mongoose.model('customers');

exports.get = async() => {
    const res = await customers
    .find();
    return res;
}

exports.authenticate = async(data) => {
    const res = await customers.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}

exports.getById = async(id) => {
    const res = await customers.findById(id);
    return res;
}

exports.create = async(data) =>{
    var res = new customers(data);
    await res.save()
}

exports.update = async(_id, data) =>{
    await customers
    .findByIdAndUpdate(_id,{
        $set:{
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }})
}

exports.del = async(_id) => {
    await customers
    .findOneAndRemove(_id)
}