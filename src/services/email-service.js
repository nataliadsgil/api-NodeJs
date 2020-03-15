'use strict';
var config = require('../configure/config');
var sendgrid = require('sendgrid')(config.sendgridKey);

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'moya10silva@gmail.com',
        subject: subject,
        html: body
    });    
}
