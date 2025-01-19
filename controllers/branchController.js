const Branch = require('../models/Branch');

const createBranch = async (req, res) => {
    const { name, location, contact_number } = req.body;
    try {
        const branch = await Branch.create({ name, location, contact_number });
        res.status(201).json({ branch_id: branch.id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getBranch = async (req, res) => {
    try {
        const branch = await Branch.findByPk(req.params.id);
        if (!branch) return res.status(404).json({ message: 'Branch not found' });

        res.status(200).json(branch);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getAllBranches = async (req, res) => {
    try {
        const branches = await Branch.findAll();
        res.status(200).json(branches);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateBranch = async (req, res) => {
    const { name, location, contact_number } = req.body;
    try {
        const branch = await Branch.findByPk(req.params.id);
        if (!branch) return res.status(404).json({ message: 'Branch not found' });

        branch.name = name;
        branch.location = location;
        branch.contact_number = contact_number;
        await branch.save();
        res.status(200).json({ message: 'Branch updated' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteBranch = async (req, res) => {
    try {
        const branch = await Branch.findByPk(req.params.id);
        if (!branch) return res.status(404).json({ message: 'Branch not found' });

        await branch.destroy();
        res.status(200).json({ message: 'Branch deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createBranch, getBranch, updateBranch, deleteBranch, getAllBranches };
