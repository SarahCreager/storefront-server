'use strict';

const ProductTable = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'product',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      inventory: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  return model;
};

module.exports = ProductTable;
