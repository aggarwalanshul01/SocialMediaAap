const route = require('express').Router();
const { db, users, posts, comments } = require('../db/loginTable');


route.post('/add', async(req, res) => {
    if (!req.body.title) {
        return res.status(400).redirect('./components/writePosts.html')
    }
    if (!req.body.bod) {
        return res.status(400).redirect('./components/writePosts.html')
    }
    let post = await posts.create({
        title: req.body.title,
        body: req.body.bod,
        userId: req.session.userId
    })
    res.redirect('/loggedin.html');
})
route.get('/getspecific', async(req, res) => {
    let p = await posts.findAll({
        where: {
            userId: req.session.userId
        },
        include: [users]
    });
    res.send(p);
})
route.get('/getall', async(req, res) => {
    let p = await posts.findAll({
        include: [users]
    });
    res.send(p);
})

module.exports = {
    route
}