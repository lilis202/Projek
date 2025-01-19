const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('kantor_pos', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});
module.exports = sequelize;