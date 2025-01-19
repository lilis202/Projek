const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Branch = sequelize.define('Branch', {
    name: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    contact_number: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Branch;
