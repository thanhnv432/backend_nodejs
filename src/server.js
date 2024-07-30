
const express = require('express'); 
const path = require('path'); // khai báo path
require('dotenv').config; //cấu hình dotenv cho port cấu hình
const app = express();
const port = process.env.PORT || 4200; //cau hình port
const hostname = process.env.HOST_NAME; //cấu hình đường dẫn

app.set('views', path.join(__dirname, './views')); //cấu hình join theo __dirname
app.set('view engine', 'ejs'); //cấu hinhg ejs

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Hello Home')
  })
app.get('/trangcode', (req, res) => {
  // res.send('Hello Home')
  res.render('sample');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})