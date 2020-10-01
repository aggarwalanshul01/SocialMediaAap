const sequelize = require('sequelize');
const db = new sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/test.db'
})
const users = db.define('user', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nickname: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    username: {
        type: sequelize.DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: sequelize.DataTypes.STRING(100),
        allowNull: false
    }
})
const COL_TITLE_DEF = {
    type: sequelize.DataTypes.STRING(140),
    allowNull: false
}


const posts = db.define('post', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: COL_TITLE_DEF,
    body: {
        type: sequelize.DataTypes.TEXT,
        allowNull: false
    }
})
const comments = db.define('comment', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: COL_TITLE_DEF,
    body: {
        type: sequelize.DataTypes.TEXT('tiny')
    }
})

users.hasMany(posts);
posts.belongsTo(users);

posts.hasMany(comments);
comments.belongsTo(posts);

users.hasMany(comments);
comments.belongsTo(users);

module.exports = {
    users,
    comments,
    posts,
    db

}