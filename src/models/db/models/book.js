
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../../../config/config'); 

class Book extends Model {}

Book.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cover: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
  
}, {
  sequelize,
  modelName: 'Book',
  tableName: 'books'
});

module.exports = Book;
