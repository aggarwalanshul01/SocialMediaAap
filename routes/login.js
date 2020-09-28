const route = require('express').Router();
const { db, users } = require('../db/loginTable');

route.get('/', (req, res) => {
    //res.send('Hello')
    res.redirect('/login.html')
})
route.post('/', async(req, res) => {
    if (!req.body.username) {
        return res.status(400).redirect('/login.html')
    }
    if (!req.body.password) {
        return res.status(400).redirect('/login.html')
    }
    let user = await users.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    if (user) {
        //console.log(user.id);
        req.session.userId = user.id
        console.log(req.session.userId);
        req.session.username = user.username;
        //res.status(200).send('SUCCESSFULLY LOGGEDIN')
        return res.redirect('/loggedin.html')
    } else {
        return res.status(404).redirect('/login.html')
    }
})
route.get('/done', (req, res) => {
    //res.send('Hello')
    let sent = { username: req.session.username }
    res.send(sent);
})


module.exports = {
    route
}