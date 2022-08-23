const mongoose = require('mongoose');
const winston = require('winston');

module.exports=function(){

    mongoose.connect('mongodb+srv://itswaleedtahir:itswaleedtahir123@cluster0.smf6v.mongodb.net/vildyDB')
    .then(() => winston.info('Connected to MongoDB...'));
}