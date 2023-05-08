const express = require('express');
const Employee = require('../models/employee');

const router = express.Router();

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get employee by ID
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create employee
router.post('/', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update employee
router.put('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      await employee.update(req.body);
      res.json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete employee
router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      await employee.destroy();
      res.json({ message: 'Employee deleted' });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const { Op } = require('sequelize');

// Get all employees
router.get('/', async (req, res) => {
  try {
    const where = {};

    if (req.query.name) {
      where.name = { [Op.iLike]: `%${req.query.name}%` };
    }

    if (req.query.department) {
      where.department = { [Op.iLike]: `%${req.query.department}%` };
    }

    if (req.query.profile) {
      where.profile = { [Op.iLike]: `%${req.query.profile}%` };
    }

    const employees = await Employee.findAll({ where });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;