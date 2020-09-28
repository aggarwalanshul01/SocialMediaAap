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
module.exports = {
    users,
    db
}