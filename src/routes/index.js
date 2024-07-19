const express = require('express');
const router = express.Router();
const { Author, Book, BookAuthor, Category, User } = require('../models/db/models');

// Ruta para la página principal
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [
        {
          model: Author,
          through: { attributes: [] }
        }
      ]
    });
    res.render('books/index', { books });
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    res.status(500).send('Error al obtener los libros');
  }
});

module.exports = router;