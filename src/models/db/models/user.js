'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Name: DataTypes.STRING,
    Email: DataTypes.STRING,
    Country: DataTypes.STRING,
    Pass: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER
  }, {});

  User.associate = function(models) {
    User.belongsTo(models.Category, { foreignKey: 'CategoryId' });
  };

  return User;
};