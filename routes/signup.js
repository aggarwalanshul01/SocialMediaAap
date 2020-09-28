const route = require('express').Router();
const { db, users } = require('../db/loginTable');

route.get('/', (req, res) => {
    //res.send('Hello')
    res.redirect('/signup.html')
})
route.post('/', async(req, res) => {
    if (!req.body.nickname) {
        return res.status(400).redirect('/signup.html')
    }
    if (!req.body.username) {

        return res.status(400).redirect('/signup.html')
    }
    if (!req.body.password) {
        return res.status(400).redirect('/signup.html')
    }
    let user = await users.create({
            username: req.body.username,
            nickname: req.body.nickname,
            password: req.body.password
        })
        // console.log(user);
        // console.log(req.body.username,
        //     req.body.nickname,
        //     req.body.password);
    if (user) {
        req.session.userId = user.id
        req.session.username = user.username;
        return res.redirect('/loggedin.html')
    } else {
        return res.status(404).redirect('/signup.html')
    }
})


module.exports = {
    route
}