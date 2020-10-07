const route = require('express').Router();
const { db, users, posts, comments } = require('../db/loginTable');

route.get('/getu', async(req, res) => {

    let user = await users.findAll();

    //console.log(req.session.postId);
    res.send(user);

})
route.get('/idd', async(req, res) => {


    console.log("****");
    console.log(req.session.userId);
    data = { id: req.session.userId }
    res.send(data);

})
route.post('/user', async(req, res) => {
    console.log("*" + req.body.user);
    let user = await users.findAll({
        where: {
            id: req.body.user
        }
    });
    //console.log(user);
    res.send(user);

})

module.exports = {
    route
}