const express = require('express');
const Sequelize = require('../config/database');
const path = require('path');


const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar el motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, '../public')));

const sequelize = new Sequelize(db.development);
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Error al sincronizar con la base de datos:', err);
});

// Ruta para login
app.get('/login', (req, res) => {
  res.render('users/login.ejs');
});

// Ruta para registro
app.get('/registro', (req, res) => {
  res.render('users/register.ejs');
});

// Ruta explícita para la raíz "/"
app.use('/', indexRouter);