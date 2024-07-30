const path = require('path'); // khai báo path
const express = require('express'); 

const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views')); //cấu hình join theo __dirname
    app.set('view engine', 'ejs'); //cấu hinhg ejs
    app.use(express.static(path.join('./src','public')));
}

module.exports = configViewEngine;