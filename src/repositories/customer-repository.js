'use strict'
const mongoose = require('mongoose');
const customers = mongoose.model('customers');

exports.get = async() => {
    const res = await customers
    .find();
    

    return res;
}
exports.getBySlug = async(slug) =>{
    const res = await customers
    .findOne({
        slug: slug,
        active:true},'title description price slug tags')   
        return res;     
}

exports.getById = async(_id) => {
    const res = await customers
    .findById(_id)
    return res;
}

exports.getByTag = async(tags) =>{
    const res = await customers
    .find({
        tags: tags,
        active: true
        }, 'title description price slug tags') 
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