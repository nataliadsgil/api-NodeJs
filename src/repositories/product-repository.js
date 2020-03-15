'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product
    .find({
        active: true
    }, 'title price slug');
    return res;
}
exports.getBySlug = async(slug) =>{
    const res = await Product
    .findOne({
        slug: slug,
        active:true},'title description price slug tags')   
        return res;     
}

exports.getById = async(_id) => {
    const res = await Product
    .findById(_id)
    return res;
}

exports.getByTag = async(tags) =>{
    const res = await Product
    .find({
        tags: tags,
        active: true
        }, 'title description price slug tags') 
    return res;       
}

exports.create = async(body) =>{
    var product = new Product(body);
    await product.save()
}

exports.update = async(_id, data) =>{
    await Product
    .findByIdAndUpdate(_id,{
        $set:{
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }})
}

exports.del = async(_id) => {
    await Product
    .findOneAndRemove(_id)
}