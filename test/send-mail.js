#!/usr/bin/env node

var config = require('./config.json');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

var fs = require('fs');
var email = fs.readFileSync('src/index.html', 'utf8');

var auth = {
  auth: config
};

var transporter = nodemailer.createTransport(mg(auth));

// setup e-mail data with unicode symbols
var mailOptions = {
  from: '', // sender address
  to: '', // list of receivers
  subject: 'Responsive Email Template', // Subject line
  html: email // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: ' + info.response);
});
