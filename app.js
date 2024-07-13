const express = require ('express');
const path = require ('path');

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la carta de producto
app.get('/producto', (req, res) => {
  res.sendFile(path.join(__dirname, '.views/cart-product.html'));
});

// Ruta explícita para la raíz "/"
app.get('/', (req, res) => {
  res.render(path.join(__dirname, './views/books/index.ejs'));
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });