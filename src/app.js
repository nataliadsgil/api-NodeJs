'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./configure/config') ;

const app = express();
const router = express.Router();

//Connecta ao banco
mongoose.connect(config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true  });
//mongoose.connect(config.connectionString);
//Carrega os models
const Product = require('./models/product');
const Customer = require('./models/customers');
const Order = require('./models/order');

//carrega as rotas
const indexRoute = require('./route/index-route');
const productRoute = require('./route/product-route');
const customerRoute = require('./route/customer-router');
const orderRoute = require('./route/order-router');

app.use(bodyParser.json());// Todo conteudo passa para JSON
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute)
module.exports = app;

//status(200) - Deu certo
//status(201) - create
//status(400) - Erro bad request
//status(401) - Não autenticado.
//status(403) - Acesso negado
//status(500) - Internal server error