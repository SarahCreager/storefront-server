'use strict';

const CategoriesTable = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'category',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
  );
  return model;
};

module.exports = CategoriesTable;
