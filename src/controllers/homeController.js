const getHomepage = (req, res) => {
    res.send('Home day')
}

const getAboutPage = (req, res) => {
    res.send('Hello About page')
}

const getTrangCode = (req, res) => {
    res.render('sample');
}

module.exports = {
    getHomepage,
    getAboutPage,
    getTrangCode
}