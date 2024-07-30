const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getAboutPage = (req, res) => {
    res.send('Hello About page')
}

const getTrangCode = (req, res) => {
    return res.render('home.ejs');
}

const postCreateUser = (req, res) => {
    const { email, name, city } = req.body;
    connection.query(
        `INSERT INTO Users (email, name, city) values (?, ?,?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('Create user Success')
        }
    )
}

module.exports = {
    getHomepage,
    getAboutPage,
    getTrangCode,
    postCreateUser
}