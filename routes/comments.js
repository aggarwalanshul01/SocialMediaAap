const route = require('express').Router();
const { db, users, posts, comments } = require('../db/loginTable');


route.post('/orderp', (req, res) => {

    req.session.postId = req.body.postId;
    console.log(req.session.postId);
    //return res.send(req.session.postId);
    res.redirect('/components/comments.html');
})
route.get('/getp', async(req, res) => {

    let post = await posts.findAll({
        where: {
            id: req.session.postId
        },
        include: [users]
    })

    //console.log(req.session.postId);
    res.send(post);

})
route.get('/previous', async(req, res) => {
    let c = await comments.findAll({
        where: {
            postId: req.session.postId
        },
        include: [users]
    });
    res.send(c);
})
route.post('/add', async(req, res) => {

    if (!req.body.title) {
        return res.status(400).redirect('./components/comments.html')
    }
    if (!req.body.bod) {
        return res.status(400).redirect('./components/comments.html')
    }
    let comment = await comments.create({
        title: req.body.title,
        body: req.body.bod,
        userId: req.session.userId,
        postId: req.session.postId
    })
    req.session.postId = null;
    res.redirect('/loggedin.html');
})
module.exports = {
    route
}