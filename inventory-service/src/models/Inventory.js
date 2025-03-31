const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost/inventory_db');

const Inventory = sequelize.define('Inventory', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Inventory;
