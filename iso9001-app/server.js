const express = require('express');
const db = require('./db'); // importa la conexión que ya hiciste

const app = express();
const PORT = 3000;

// Ruta de prueba para ver que funciona la conexión
app.get('/empresas', (req, res) => {
  db.query('SELECT * FROM Empresas', (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error en la base de datos');
      return;
    }
    res.json(results);
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
