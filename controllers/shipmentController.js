const Shipment = require('../models/Shipment');
const User = require('./models/User');

const createShipment = async (req, res) => {
    const { origin, destination, user_id } = req.body;
    try {
        const user = await User.findByPk(user_id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const tracking_number = `TRK-${Date.now()}`;
        const shipment = await Shipment.create({ tracking_number, origin, destination, user_id });
        res.status(201).json({ tracking_number });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getShipment = async (req, res) => {
    try {
        const shipment = await Shipment.findOne({ where: { tracking_number: req.params.tracking_number } });
        if (!shipment) return res.status(404).json({ message: 'Shipment not found' });

        res.status(200).json(shipment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateShipment = async (req, res) => {
    const { status } = req.body;
    try {
        const shipment = await Shipment.findByPk(req.params.id);
        if (!shipment) return res.status(404).json({ message: 'Shipment not found' });

        shipment.status = status;
        await shipment.save();
        res.status(200).json({ message: 'Shipment status updated' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteShipment = async (req, res) => {
    try {
        const shipment = await Shipment.findByPk(req.params.id);
        if (!shipment) return res.status(404).json({ message: 'Shipment not found' });

        await shipment.destroy();
        res.status(200).json({ message: 'Shipment deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getShipmentsByUser = async (req, res) => {
    try {
        const shipments = await Shipment.findAll({ where: { user_id: req.params.user_id } });
        res.status(200).json(shipments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createShipment, getShipment, updateShipment, deleteShipment, getShipmentsByUser };
