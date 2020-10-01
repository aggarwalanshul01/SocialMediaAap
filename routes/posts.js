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
    res.send(post);
})



module.exports = {
    route
}