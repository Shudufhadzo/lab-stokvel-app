const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Liverpool10##",
  database: "stokvel"
});

connection.connect();

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
  res.send('Hello, World!'); // Customize the response as needed
});

app.get('/stokvels/:userId', (req, res) => {
  const { userId } = req.params;

  connection.query('SELECT * FROM stokvels WHERE userId = ?', userId, (error, results, fields) => {
    if (error) throw error;

    res.json({ stokvels: results });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
