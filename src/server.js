
const express = require('express');
require('dotenv').config; //cấu hình dotenv cho port cấu hình
const app = express();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const port = process.env.PORT || 4200; //cau hình port
const hostname = process.env.HOST_NAME; //cấu hình đường dẫn
const connection = require('./config/database');

// simple query
// connection.query(
//   'SELECT * FROM `Users`',
//   function (err, results, fields) {
//     console.log('process.env ==', process.env);
//     console.log('results ==', results); // results contains rows returned by server
//   }
// );

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);

// khai bao route
app.use('/', webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})