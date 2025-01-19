const express = require('express');
const { register, login, getUser } = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', authenticateToken, getUser);

module.exports = router;
