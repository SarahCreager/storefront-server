'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const ProductTable = require('./products');
const CategoriesTable = require('./categories');

const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite::memory:' 
  : process.env.DATABASE_URL;

  const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  } : {}

const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);

const Products = ProductTable(sequelize, DataTypes);
const Categories = CategoriesTable(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  Products,
  Categories,
};
