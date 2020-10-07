const express = require('express');
const session = require('express-session')
const { db, users } = require('./db/loginTable');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const { Socket } = require('net');
const io = socketio(server);

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'skadh32iehb37iudhebiwqnhk92ueniedn'
}))

const route1 = require('./routes/login').route;
const route2 = require('./routes/signup').route;
const route3 = require('./routes/profile').route;
const route4 = require('./routes/posts').route;
const route5 = require('./routes/comments').route;
const route6 = require('./routes/chating').route;
app.use('/login', route1);
app.use('/signup', route2);
app.use('/profile', route3);
app.use('/posts', route4);
app.use('/comments', route5);
app.use('/chating', route6);
app.use('/', express.static(__dirname + '/public'));
let socketMap = {};
io.on('connection', (socket) => {
    socket.on('join', async(data) => {
        //console.log(data);
        let user = await users.findAll({
            where: {
                id: data.idd
            }
        })
        socket.join(user[0].username);
        socketMap[socket.id] = user[0].username;
    });

    console.log("connected");
    socket.on('sendMsg', async(data) => {
        console.log(socketMap);
        data.from = socketMap[socket.id];
        console.log(data);
        if (!data.user) {
            socket.broadcast.emit('rcvdMsg', data);
        } else {

            socket.to(data.user).emit('rcvdMsg', data);
        }

    })
})

db.sync()
    .then(() => {
        server.listen(4444, (req, res) => {
            console.log("SERVER STARTED ON http://localhost:4444")
        })
    }).catch((err) => {
        console.error("Error while db.sync" + err);
    })