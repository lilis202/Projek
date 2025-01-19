const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('../User');

const Shipment = sequelize.define('Shipment', {
    tracking_number: { type: DataTypes.STRING, allowNull: false, unique: true },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'In Transit' },
    origin: { type: DataTypes.STRING, allowNull: false },
    destination: { type: DataTypes.STRING, allowNull: false },
});

Shipment.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

module.exports = Shipment;
