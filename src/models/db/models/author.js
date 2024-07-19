'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    Name: DataTypes.STRING,
    Country: DataTypes.STRING
  }, {});

  Author.associate = function(models) {
    Author.belongsToMany(models.Book, { through: 'BookAuthor', foreignKey: 'AuthorId' });
  };

  return Author;
};