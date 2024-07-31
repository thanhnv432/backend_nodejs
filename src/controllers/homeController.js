const connection = require('../config/database');
const { getAllUsers } = require('../services/userService');

const getHomepage = async(req, res) => {
    let results = await getAllUsers();
    console.log("resssssss", results);
    return res.render('home.ejs', {listUsers: results});
}

const getAboutPage = (req, res) => {
    res.send('Hello About page')
}

const getTrangCode = (req, res) => {
    return res.render('home.ejs');
}

const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body;
    // connection.query(
    //     `INSERT INTO Users (email, name, city) values (?, ?,?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('Create user Success')
    //     }
    // )
    let [results, fields] = await connection.query(`INSERT INTO Users (email, name, city) values (?, ?,?)`, [email, name, city]);
    // const [results, fields] = await connection.query('select * from Users u');
    console.log("results==", results);
    res.send('Create user Success')
}

module.exports = {
    getHomepage,
    getAboutPage,
    getTrangCode,
    postCreateUser
}