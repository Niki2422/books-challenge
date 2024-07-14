const express = require ('express');
const path = require ('path');

const app = express();
const PORT = 3000;

// Configurar el motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para login
app.get('/login', (req, res) => {
  res.render('users/login.ejs');
});

// Ruta para registro
app.get('/registro', (req, res) => {
  res.render('users/register.ejs');
});


// Ruta explícita para la raíz "/"
app.get('/', (req, res) => {
  res.render('books/index.ejs');
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });