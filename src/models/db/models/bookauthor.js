'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const BookAuthor = sequelize.define('BookAuthor', {
    AuthorId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER
  }, {});

  return BookAuthor;
};