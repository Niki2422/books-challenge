'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    Name: DataTypes.STRING
  }, {});

  Category.associate = function(models) {
    Category.hasMany(models.User, { foreignKey: 'CategoryId' });
  };

  return Category;
};