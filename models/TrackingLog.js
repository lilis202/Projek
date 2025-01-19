const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Shipment = require('./Shipment');

const TrackingLog = sequelize.define('TrackingLog', {
    status: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

TrackingLog.belongsTo(Shipment, { foreignKey: 'shipment_id', onDelete: 'CASCADE' });

module.exports = TrackingLog;
