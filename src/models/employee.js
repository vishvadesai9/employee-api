const { Sequelize, DataTypes, Model } = require('sequelize');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USERNAME;
const dbPass = process.env.DB_PASS;
const dbPort = process.env.DB_PORT;

const sequelize = new Sequelize(`postgresql://${dbName}:${dbPass}@${dbHost}:${dbPort}/${dbUser}`, {
});



class Employee extends Model {}

Employee.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  education: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  yearsOfExp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  profile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Employee',
  timestamps: true,
});

Employee.sync()
  .then(() => {
    console.log('Employee table created successfully.');
  })
  .catch((error) => {
    console.error('Error creating Employee table:', error);
  });

module.exports = Employee;