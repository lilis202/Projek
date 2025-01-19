const express = require('express');
const { createBranch, getBranch, updateBranch, deleteBranch, getAllBranches } = require('../controllers/branchController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, createBranch);
router.get('/', getAllBranches);
router.get('/:id', getBranch);
router.put('/:id', authenticateToken, updateBranch);
router.delete('/:id', authenticateToken, deleteBranch);

module.exports = router;
