const express = require('express');
const { createShipment, getShipment, updateShipment, deleteShipment, getShipmentsByUser } = require('../controllers/shipmentController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, createShipment);
router.get('/:tracking_number', authenticateToken, getShipment);
router.put('/:id', authenticateToken, updateShipment);
router.delete('/:id', authenticateToken, deleteShipment);
router.get('/user/:user_id', authenticateToken, getShipmentsByUser);

module.exports = router;
