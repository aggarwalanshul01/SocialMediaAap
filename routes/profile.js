const route = require('express').Router();
const { db, users } = require('../db/loginTable');

route.get('/', async(req, res) => {

        console.log(req.session.userId);
        if (!(req.session.userId)) {
            res.redirect('login.html');
        }
        //console.log(req.session.id);
        let user = await users.findByPk(req.session.userId);
        console.log(user);
        res.render('profile', { user })
    })
    // route.post('/', async(req, res) => {
    //     // if (!req.body.username) {
    //     //     return res.status(400).redirect('/login.html')
    //     // }
    //     // if (!req.body.password) {
    //     //     return res.status(400).redirect('/login.html')
    //     // }
    //     // let user = await users.findOne({
    //     //     where: {
    //     //         username: req.body.username,
    //     //         password: req.body.password
    //     //     }
    //     // })
    //     // if (user) {
    //     //     req.session.id = user.id;
    //     //     console.log(req.session.id);
    //     //     //res.status(200).send('SUCCESSFULLY LOGGEDIN')
    //     //     app.redirect('/profile')
    //     // } else {
    //     //     return res.status(404).redirect('/login.html')
    //     // }
    //     res.send('null');
    // })


module.exports = {
    route
}